const PDFDocument = require('pdfkit');
const fs = require('fs');
const catFacts = require('cat-facts');
let allFacts = catFacts.all;
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('output.pdf'));

doc.text(allFacts);
doc.end();
