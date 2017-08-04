var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.write('Open a file!')
    res.end();
    fs.open('mynewfile2.txt', 'w', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}).listen(8080);