const http = require('http');

/**
 * Creates a small HTTP server using the http module.
 * The server listens on port 1245 and responds with "Hello Holberton School!"
 * for any endpoint as plain text.
 * @returns {http.Server} The created HTTP server instance.
 */
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
})
  .listen(port);

module.exports = app;
