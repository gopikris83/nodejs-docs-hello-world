const http = require('http');
var express = require("express");
let fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead( 200, {"Content-Type": "text/html"});
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
    // response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);