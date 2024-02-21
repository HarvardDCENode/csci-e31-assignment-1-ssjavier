const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');


var server = http.createServer((req, res) => {
    console.log(req.url);

  // parse the URL into its component parts
    const parsedUrl = url.parse(req.url, true);

  // extract the pathname and query properties
    const { pathname, query } = parsedUrl;

    // Create an absolute path to the requested file.
    // Assume the server was started from the webroot
    const absolute_path_to_file = path.join(process.cwd(), pathname);
    console.log('absolute_path_to_file is %s', absolute_path_to_file);

    res.writeHead(200);
    res.end();

    fs.readFile(absolute_path_to_file, 'binary', (err, data) => {
        if (err) {
            console.log(err);
            if (err.code == 'ENOENT'){
                res.writeHead(404);
                res.end("404: File Not Found"); 
        } else if (err.code == 'EISDIR'){
            fs.readdir(absolute_path_to_file, (err, files)=>{
                if(err) {
                    res.writeHead(500);
                    res.end("Server Error 500");
                }
                console.log(files);
                let s = '<b>Directory Listing</b><br>';
                files.forEach((i)=>{
                  s += (i + "<a>");
                });
                writeHead(200);
                res.end(s, 'utf8');
            });
        }
      }
      res.writeHead(200);
      res.end(data, 'binary', ()=>{
        console.log("file delivered" + pathname);
      });
  
      });
});