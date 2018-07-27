'use strict';
const fs = require('fs')
// const Student = require('../models/student')
// console.log(Student.first_name)

class Student{
  constructor(firstName,lastName,gender,birthday,email,phone){
    this.first_name = firstName
    this.last_name = lastName
    this.gender = gender
    this.birthday = birthday
    this.email = email
    this.phone = phone
  }
}

let result = []
let data = fs.readFileSync('./dataSeed.csv','utf8')
let dataStudents = data.split('\n')
for(let i = 0; i<dataStudents.length - 1; i++){
  let dataStudent = dataStudents[i].split(',')
  let student = new Student(dataStudent[0],dataStudent[1],dataStudent[2],dataStudent[3],dataStudent[4],dataStudent[5])
  result.push(student)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students',result, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
