const pdf = require('html-pdf');

class PdfWriter{
    static WritePDF(name, html){
        pdf.create(html, {}).toFile(name, (err, res) => {
            if (err) return console.log(err);
        });
    }
}

module.exports = PdfWriter;