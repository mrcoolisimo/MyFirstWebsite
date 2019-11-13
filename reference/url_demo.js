const url = require('url').URL;

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
//Host
console.log(myUrl.host);
//Hostname (no port)
console.log(myUrl.hostname);
//Pathname
console.log(myUrl.pathname);
//Serialized query
console.log(myUrl.search);
//Params Object
console.log(myUrl.searchParams);
//Add Param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//Loop through params
myUrl.searchParams.forEach((vsalue,nsame) => console.log(`${nsame}: ${vsalue}`));