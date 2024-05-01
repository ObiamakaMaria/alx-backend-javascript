const fs = require('fs');

/**
 * Reads and analyzes a database file asynchronously to count students and their details.
 * @param {string} path - The path to the database file.
 * @returns {Promise<void>} A promise that resolves when the database is successfully processed.
 * @throws {Error} Throws an error if the database file cannot be loaded.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, info) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = info.split('\n').filter((line) => line.length > 0);

        console.log(`Number of students: ${lines.length - 1}`);

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
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
