const http = require('http');
const PORT = 1000;

const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (method === 'GET' && url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1><b>Home Page</b></h1>');
        return;
    }

    if (method === 'GET' && url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1><b>About Page</b></h1>');
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1><b>404 Page Not Found</b></h1>');
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = server;
