'use strict';
const faker = require(`faker`)
const randomBirthday = require('random-birthday');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let arr = []
    let gender = ['male','female']
    for(let i = 0 ; i < 20 ; i++){
      let random = Math.floor(Math.random()*gender.length)
      
      let obj = {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        gender:gender[random],
        birthday:randomBirthday({ min: 1980, max: 2000 }),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        createdAt: new Date,
        updatedAt: new Date
      }
      arr.push(obj)
    }  
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('students',arr,{});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface,bulkDelete('students',null,{});
  }
};