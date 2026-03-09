const readXlsxFile = require("read-excel-file/node");

const map = {
  Word: "word",
  Synonym: "syn",
  Antonym: "ant",
};
readXlsxFile("../dummy_files/excel_demo.xlsx", { map, sheet: 2 }).then(
  (rows) => {
    console.log(rows);
  }
);
