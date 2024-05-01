const express = require('express');
const { readFile } = require('fs');

/**
 * Creates an HTTP server using Express.
 * The server listens on port 1245 and handles specific endpoints:
 * - For the path '/', responds with 'Hello Holberton School!' in the page body.
 * - For the path '/students', responds with 'This is the list of our students'
 *   followed by the contents of a specified CSV file.
 *   The CSV file is read asynchronously, and its contents are processed to count
 *   and display student details grouped by fields.
 * @param {string} path - The path to the CSV file containing student data.
 * @returns {express.Application} The Express application instance.
 * @throws {Error} Throws an error if the database file cannot be loaded or read.
 */

const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

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

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((data) => {
    res.send(`This is the list of our students\n${data}`);
  }).catch(() => {
    res.send('Cannot load or read the database');
  });
});

app.listen(port);

module.exports = app;
