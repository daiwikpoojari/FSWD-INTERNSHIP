// Assignment of 23rd March

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.end('Hello! Welcome to the Home Page.');
            break;

        case '/about':
            res.statusCode = 200;
            res.end('This is the About Page.');
            break;

        case '/contact':
            res.statusCode = 200;
            res.end('Contact us at: support@example.com');
            break;

        default:
            res.statusCode = 404;
            res.end('404 Error: Route not found.');
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:3000`);
});