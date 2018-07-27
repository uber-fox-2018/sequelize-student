'use strict';
const fs = require('fs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    let arrStudents = [];
    let studentsData = fs.readFileSync('./students.csv', 'utf8')
    .split('\n')
    .map(data => data.split(','))
    .slice(1)
    .forEach(data => {
      arrStudents.push({
        first_name: data[0],
        last_name: data[1],
        gender: data[2],
        birthday: data[3],
        email: data[4],
        phone: data[5],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });    
    return queryInterface.bulkInsert('Students', arrStudents, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};