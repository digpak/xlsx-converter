# XLSX Converter

The `xlsx-converter` is a versatile Node.js library that simplifies the conversion of XLSX (Excel) files into various formats. It supports the transformation of spreadsheet data into JSON, CSV, XML, and more, providing flexibility for your data processing needs. Whether you're extracting, transforming, or loading data, this library offers an easy-to-use solution. With support for multiple output formats, it's a valuable tool for developers working with Excel data in their Node.js projects.


## Key Features

- Convert XLSX files to JSON, CSV, XML, and more.
- Simple and customizable API for seamless integration.
- Supports a range of output formats to suit diverse requirements.
- Ideal for data extraction, migration, and integration tasks.
- Built-in handling of Excel's cell range to ensure precise data selection.

## Usage

```javascript
const convertXlsxToFormat = require('xlsx-converter');

// Convert XLSX to JSON
convertXlsxToFormat("input.xlsx", "output.json", "json");

// Convert XLSX to CSV
convertXlsxToFormat("input.xlsx", "output.csv", "csv");

// Convert XLSX to XML
convertXlsxToFormat("input.xlsx", "output.xml", "xml");
