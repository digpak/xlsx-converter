const XLSX = require("xlsx");
const jsonfile = require("jsonfile");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const { Builder } = require("xml2js");

function convertXlsxToFormat(inputFilePath, outputFilePath, format) {
  // Load your XLSX file
  const workbook = XLSX.readFile(inputFilePath);

  // Assume you want to convert the first sheet in the XLSX file
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // Get the range of cells from A1 to H (first 8 columns)
  const range = XLSX.utils.decode_range(worksheet["!ref"]);
  range.e.c = Math.min(7, range.e.c); // Ensure it's not more than column H

  // Create a new worksheet with the desired range
  const newWorksheet = {
    "!ref": XLSX.utils.encode_range(range),
    ...worksheet,
  };

  // Convert the new worksheet to an array of objects
  const jsonData = XLSX.utils.sheet_to_json(newWorksheet, { header: 1 });

  // Map the data to an array of objects using the first row as keys
  const formattedData = jsonData.slice(1).map((row) => {
    const obj = {};
    jsonData[0].forEach((key, index) => {
      obj[key] = row[index];
    });
    return obj;
  });

  // Output based on the specified format
  switch (format.toLowerCase()) {
    case "json":
      jsonfile.writeFileSync(outputFilePath, formattedData, { spaces: 2 });
      console.log(`Formatted JSON data has been written to ${outputFilePath}`);
      break;
    case "csv":
      const csvWriter = createCsvWriter({
        path: outputFilePath,
        header: Object.keys(formattedData[0]).map((key) => ({
          id: key,
          title: key,
        })),
      });
      csvWriter.writeRecords(formattedData);
      console.log(`Formatted CSV data has been written to ${outputFilePath}`);
      break;
    case "xml":
      const builder = new Builder();
      const xmlData = builder.buildObject({ data: formattedData });
      require("fs").writeFileSync(outputFilePath, xmlData);
      console.log(`Formatted XML data has been written to ${outputFilePath}`);
      break;
    default:
      console.error("Unsupported output format.");
  }
}

module.exports = convertXlsxToFormat;
