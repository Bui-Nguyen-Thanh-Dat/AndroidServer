var http = require("http");
var fs = require("fs");
var formidable = require("formidable");

http.createServer(function (req, res) {
    if (req.url == "/page-c.html") {
    res.writeHead(301,{Location : "http://" + req.headers['host'] + '/page-b.html'});
    
    return res.end();
    }else{
    console.log(req.url);
    readFlieResponse(req.url.substring(1),res);
    }
  })
  .listen(8000);

function readFlieResponse(fileURL, res) {
  fs.readFile(fileURL, function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
}
