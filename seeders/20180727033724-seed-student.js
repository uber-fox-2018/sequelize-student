'use strict';

const fs = require('fs')

class Student{
  constructor(first_name,last_name,gender,birthday,email,phone){
    this.first_name = first_name
    this.last_name = last_name
    this.gender = gender
    this.birthday = birthday
    this.email = email
    this.phone = phone
  }
}

var arr = []
var dataStudent = fs.readFileSync('./dummy.csv','utf8').split('\n')

for(var i = 1; i < dataStudent.length;i++){
  var parsing = dataStudent[i].split(',')
  var fn = parsing[0]
  var ls = parsing[1]
  var gen = parsing[2]
  var bt = parsing[3]
  var em = parsing[4]
  var ph = parsing[5]
  var student = new Student(fn,ls,gen,bt,em,ph)
  arr.push(student)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', arr, {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
