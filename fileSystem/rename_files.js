var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.write('File Renamed!')
    res.end();
    var fs = require('fs');

    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });
}).listen(8080);