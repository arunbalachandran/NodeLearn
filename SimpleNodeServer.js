var http = require('http')
function onRequest(request, response) {
    console.log("The user made a request to url --> " + request.url);
    response.writeHead(200, {'Context-Type': 'text/plain'});
    response.write('The server likes your request. It has choosen to respond to you.');
    response.end();
}

http.createServer(onRequest).listen(5500);
console.log("The server has started running!!");