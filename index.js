// By Helmy Agta Al Fatah
var request = require('request'),
    cheerio = require('cheerio');
    // Urlnya
request('http://data.bmkg.go.id/autogempa.xml', function(error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html, {
          xmlMode: true
        });
        // Grabnya
        console.log("Tanggal :", $('Tanggal').text()),
        console.log("Jam : ", $('Jam').text()),
        console.log("Arah : ",$('coordinates, Lintang, Bujur, Magnitude').text()),
        console.log("Kedalaman : ", $('Kedalaman').text()),
        console.log("\nDaerah Berpotensi Gempa : ")
        console.log($('Wilayah1').text()),
        console.log($('Wilayah2').text()),
        console.log($('Wilayah3').text()),
        console.log($('Wilayah4').text()),
        console.log($('Wilayah5').text()),
        console.log("\nPotensi : ", $('Potensi').text())
    }
});