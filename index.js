const http = require('http');
    fs = require('fs');

    fs.readFile('./index.html', function (err, html) {
        if (err) {
            throw err; 
        }       
        http.createServer(function(request, response) {  
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(html);  
            response.end();  
        }).listen(8000);
    });
const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
