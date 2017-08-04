var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.write('Delete a file!')
    res.end();
    var fs = require('fs');

    fs.unlink('mynewfile2.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });
}).listen(8080);