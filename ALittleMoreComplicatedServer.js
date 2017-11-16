var fs = require('fs')
var http = require('http')

function send404(response) {
    console.log("Reached the 404 page!");
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("You have reached the end of the line ...");
    response.end();
}

function onResponse(request, response) {
    // should we advocate for the use of triple equals?
    if (request.method === "GET" && request.url === "/") {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream('./index.html').pipe(response);
    }

    else {
        send404(response);
    }
}

http.createServer(onResponse).listen(5050);