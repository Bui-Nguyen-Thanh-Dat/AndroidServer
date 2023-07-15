var http = require("http");
var fs = require("fs");
var formidable = require("formidable");
http.createServer(function (req, res) {
if (req.url== '/demo_readfile1.html') {
    fs.readFile('demo_readfile1.html', function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
}else if (req.url == "/taofile") {
      fs.writeFile("mynewfile3.txt", "Hello World!", function (err) {
        if (err) throw err;
        console.log("Saved!");
      });
    } else if (req.url == "/appendFile"){
          fs.appendFile('mynewfile1.txt', 'Hello content1!', function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        }else if (req.url=="/appendFileSync") {
          fs.appendFileSync("mynewfile1.txt","Learn Nodejs with the help of well build Nodejs tutorials","utf-8");
          console.log("Saved!")
        }else if (req.url=="/renameFile"){
        fs.rename("mynewfile1.txt","mynewfile2.txt",function(err){
              if(err){
                console.log(err);
              }else{
                console.log("Renamed!");
              }
            });
            }else if (req.url=="/renameFileSync"){
              fs.renameSync("mynewfile1.txt","mynewfile2.txt");
              console.log("Renamed!")
        }
    
    
  }).listen(8080);

function readFlieResponse(fileURL, res) {
  fs.readFile(fileURL, function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
}