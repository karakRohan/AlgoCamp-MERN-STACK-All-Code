const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/home') res.end('Welcome to the Home Page!');
    else res.end('Hello World!');
});
// 12.3.8.9.3000 -> ip : port -> socket address

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// one error name :- eaddrinuse error code : EADDRINUSE
// if you get this error then you have to change the port number or stop the server which is running on that port number.  