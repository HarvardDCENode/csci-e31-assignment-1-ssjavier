var http = require('http');
var server = http.createServer(function(req, res) {

    console.log(req.url);

    res.writeHead(200);
    res.write("Hello World");
    res.end();
});
server.listen(8080, () => {
    console.log("Listening on :8080/");
});
