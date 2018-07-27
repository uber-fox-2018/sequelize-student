'use strict';
let students = require('./student_data.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Students', students, {})
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Students', null, {})
  }
};