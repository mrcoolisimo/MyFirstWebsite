const fs = require('fs');
const path = require('path');

//Create folder
//mkdir is asynchronous, meaning the program doesnt wait on completion to continue
fs.mkdir(path.join(__dirname, '/testfolder4'), 
{}, 
function(err) {
    if (err) throw err;
    console.log('Folder Created');
});

// Create and write to file
fs.writeFile(path.join(__dirname, '/testfolder4', 'hello.txt'), 
"Hello World for text!", 
err => {
    if (err) throw err;
    console.log('File written to...');
})

//Append to file
fs.appendFile(path.join(__dirname, '/testfolder4', 'hello.txt'), 
' I love Node',
err => {
    if (err) throw err;
    console.log('Append success');
});

//Read file
fs.readFile(path.join(__dirname, './testfolder4', 'hello.txt'), 'utf8', (err,data) => {
    if (err) throw err;
    console.log(data);
});

//Rename file
fs.rename(path.join(__dirname, 'testfolder4', 'hello.txt'),
path.join(__dirname, 'testfolder4', 'helloadsf.txt'), 
(err) => {
    if (err) throw err;
    console.log("File renamed");
});

