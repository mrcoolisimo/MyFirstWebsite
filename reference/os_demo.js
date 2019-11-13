const os = require('os');

//Platform
console.log(os.platform());

//Cpu Architecture -- 32bit or 64bit
console.log(os.arch());

//CPU Core Info
//console.log(os.cpus());

//Free memory
console.log(os.freemem());

//Total memory
console.log(os.totalmem());

//Home directory
console.log(os.homedir());

//Uptime in seconds (i think)
console.log(os.uptime());
