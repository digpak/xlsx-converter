# XLSX Converter

The `xlsx-converter` is a versatile Node.js library that simplifies the conversion of XLSX (Excel) files into various formats. It supports the transformation of spreadsheet data into JSON, CSV, XML, and more, providing flexibility for your data processing needs. Whether you're extracting, transforming, or loading data, this library offers an easy-to-use solution. With support for multiple output formats, it's a valuable tool for developers working with Excel data in their Node.js projects.


## Key Features

- Convert XLSX files to JSON, CSV, XML, and more.
- Simple and customizable API for seamless integration.
- Supports a range of output formats to suit diverse requirements.
- Ideal for data extraction, migration, and integration tasks.
- Built-in handling of Excel's cell range to ensure precise data selection.
- You can specify the sheet number as the fourth parameter when calling the function. If no sheet number is provided, it defaults to sheet 0

## Installation

1. **Clone this repository to your local machine:**

   ```bash
   git clone https://github.com/your-username/xlsx-converter.git

2. **Install necessary dependencies using:**

   ```javascript
      npm install
   
      // OR
   
      yarn

## Usage

```javascript
const convertXlsxToFormat = require('xlsx-converter');

// Convert XLSX to JSON
convertXlsxToFormat("path/to/your/input.xlsx", "output.json", "json");

// Convert XLSX to CSV
convertXlsxToFormat("path/to/your/input.xlsx", "output.csv", "csv");

// Convert XLSX to XML
convertXlsxToFormat("path/to/your/input.xlsx", "output.xml", "xml");

// Convert XLSX to JSON from sheet 1 (indexing starts from 0)
convertXlsxToFormat("input.xlsx", "output.json", "json", 1);

// Convert XLSX to CSV using the default sheet (sheet 0)
convertXlsxToFormat("input.xlsx", "output.csv", "csv");

