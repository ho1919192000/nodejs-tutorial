var http = require('http');
var dt = require('./getDateModule')
var url = require('url')
http.createServer(function (req, res) {
    /*req argument represents the request from the client, as an object (http.IncomingMessage object).*/
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    /*This method is the status code, 200 means that all is OK, 
    the second argument is an object containing the response headers.*/
    res.write(`The date and time are currently: ${dt.getDateTime()} 
req.url: ${req.url}`); //write a response to the client
    /*This object has a property called "url" which holds the part of the url that comes after the domain name*/
    var q = url.parse(req.url, true).query;
    var txt = `${q.year} ${q.month}`;
    res.end(txt);
}).listen(8080); //end the response

//run node server.js