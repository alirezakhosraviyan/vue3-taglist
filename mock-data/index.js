var http = require('http');
var mockserver = require('mockserver');

console.log('Mocked ape server on port 4000 ...');

http.createServer(mockserver(`${__dirname}`)).listen(4000, '88.135.36.10');
