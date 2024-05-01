const fs = require('fs');

/**
 * Counts the number of students and their details from a
 * database file.
 * @param {string} path - The path to the database file.
 * @throws {Error} Throws an error if the database file ca     * nnot be loaded.
 */

function countStudents(path) {
  try {
    const info = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = info.split('\n').filter((line) => line.length > 0);

    console.log(`Number of students: ${lines.length - 1}`);

    const fields = {};
    let isFirstLine = true;
    for (const line of lines) {
      if (isFirstLine) {
        isFirstLine = false;
        continue; // eslint-disable-line
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
