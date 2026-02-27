const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Ekys.pdf');

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('Ekys-extracted.txt', data.text);
    console.log("PDF extraction complete: Ekys-extracted.txt");
}).catch(err => {
    console.error("PDF Parse error: ", err);
});
