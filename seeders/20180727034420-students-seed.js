'use strict';
const fs = require('fs');

class Student {
  constructor(first_name, last_name, gender, birthday, email, phone) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.birthday = birthday;
    this.email = email;
    this.phone = phone;
  }
}

let output = [];
let data = fs.readFileSync('./students.csv', 'utf8').split('\n');
for (let i = 0; i < data.length; i++) {
  let studentData = data[i].split(',');
  let student = new Student(studentData[0], studentData[1], studentData[2], studentData[3], studentData[4], studentData[5]);
  output.push(student)
}
// console.log(output);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', output, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', output, {});
  }
};
