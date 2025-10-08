const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
   // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1><b>Hello NodeJs</b></h1>\n');
});

// Graceful shutdown on SIGINT/SIGTERM
function shutdown() {
    console.log('\nShutting down server...');
    server.close(() => process.exit(0));
}

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
