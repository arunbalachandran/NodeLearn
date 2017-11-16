var connect = require('connect')
var http = require('http')

var app = connect();

function profileShow(request, response) {
    console.log("Showing the profile page");
}

function supermanShow(request, response) {
    console.log("Showing the superman page");
}

app.use('/profile', profileShow);
app.use('/superman', supermanShow);

// this will throw an error anyway
http.createServer(app).listen(5050);
console.log("The engines have started whirrring ...");