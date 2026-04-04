const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/home') res.end('Welcome to the Home Page server 2!');
    else res.end('Hello World from server 2!');
});
// 12.3.8.9.3000 -> ip : port -> socket address

server.listen(3000, () => {
    console.log('Server 2 is running on http://localhost:3000');
});