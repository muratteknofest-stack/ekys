const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('deneme.pdf');

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('deneme-extracted.txt', data.text);
    console.log("PDF extraction complete: deneme-extracted.txt");
}).catch(err => {
    console.error("PDF Parse error: ", err);
});
