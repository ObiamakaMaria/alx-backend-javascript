const { createServer } = require('http');
const process = require('process');
const { readFile } = require('fs');

/**
 * Creates an HTTP server using the http module.
 * The server listens on port 1245 and handles specific endpoints:
 * - For the path '/', responds with 'Hello Holberton School!' in plain text.
 * - For the path '/students', responds with 'This is the list of our students'
 *   followed by the contents of a specified CSV file.
 *   The CSV file is read asynchronously, and its contents are processed to count
 *   and display student details grouped by fields.
 * @param {string} path - The path to the CSV file containing student data.
 * @returns {http.Server} The created HTTP server instance.
 * @throws {Error} Throws an error if the database file cannot be loaded.
 */
const port = 1245;

function homepage(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, { encoding: 'utf8' }, (err, info) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = info.split('\n').filter((line) => line.length > 0);

        const output = [`Number of students: ${lines.length - 1}`];

        const fields = {};
        let isFirstLine = true;
        for (const line of lines) {
          if (isFirstLine) {
            isFirstLine = false;
            continue; // Skip header line
          }
          const student = line.split(',');
          if (!fields[student[3]]) {
            fields[student[3]] = [];
          }
          if (student[0] !== 'firstname' && student[3]) {
            fields[student[3]].push(student[0]);
          }
        }
        for (const field in fields) {
          if (field) {
            output.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }
        resolve(output.join('\n'));
      }
    });
  });
}

function students(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(data);
      res.end();
    })
    .catch((error) => {
      res.end(error.message);
    });
}

const app = createServer((req, res) => {
  if (req.url === '/') {
    homepage(req, res);
  } else if (req.url === '/students') {
    students(req, res);
  }
})
  .listen(port);

module.exports = app;
