const path = require('path');

//Gives file name
console.log(path.basename(__filename));
//Gives absolute path
console.log(path.dirname(__filename));
//Gives file extension
console.log(path.extname(__filename));
//Creates object out of path
console.log(path.parse(__filename));
//Prints a path (whether it exists or not)
console.log(path.join(__dirname, 'testfolder', 'hello.html'));
