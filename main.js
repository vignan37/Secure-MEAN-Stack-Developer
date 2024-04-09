let info = require('./modules/model');
//console.log(info);

const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(200, 'Data success', {'Content-Type': 'text/html'});
    // response.write('<h1>Hi this is Vignan, calling from reg 2498, requesting for confirmation, over and out<h1>');
    // response.end();
    //NOTE - this is very important to end response or the request will be stuck in infinite loading.

    //NOTE - its a good practice to write in end funciton
    response.end('<h1>Hi this is Vignan, calling from reg 2498, requesting for confirmation, over and out<h1>');
})

server.listen(3000,()=>{ console.log("http:localhost:3000")});