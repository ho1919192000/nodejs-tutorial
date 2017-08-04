var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.write('Write a file!')
    res.end();
    fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}).listen(8080);