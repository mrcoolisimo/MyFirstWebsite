const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // if(req.url === '/index') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'), 
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, { 'Content-Type': 'text/html'})
    //             res.end(content);
    //     })
    // }

    // if(req.url === '/about') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'about.html'), 
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, { 'Content-Type': 'text/html'})
    //             res.end(content);
    //     })
    // }

    // if(req.url === '/api/users') {
    //     const users = [
    //         {name: 'Bob Smith', age: 40},
    //         {name: 'Liam York', age: 24}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    //Build File Path
    let filePath = path.join(__dirname, 'public',
    req.url === '/' ? 'index.html' : req.url);

    //Extnestion of file
    let extname = path.extname(filePath)

    //Initial content type
    let contentType = 'text/html';

    //Check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            breakl;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break; 
    }

    //Check if contentType is text/html but no .html file ext
    if (contentType == "text/html" && extname == "") filePath += ".html";

    //Log the filepath
    console.log(filePath)

    //Read File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENDENT') {
                //PAGE NOT FOUND
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': contentType});
                    res.end(content, 'utf8');
                });
            }

            else {
                //Some Server Error
                res.writeHead(500);
                res.end('Server Error:', err.code);
            }
        }

        else{
            //Success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    })
})


//Looks for environment var first, then defaults to port 5000
const PORT = process.env.PORT || 5000;

//Listens on port, prints message
server.listen(PORT, () => console.log('Server Running on port', PORT));
