'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    // const faker = require('faker')
    
    // let result = []

    // for(let i = 0; i < 10; i++){
    //   let obj = {}

    //   obj.first_name = faker.name.firstName()
    //   obj.last_name  = faker.name.lastName()
    //   if(Math.floor(Math.random() * 2) == 1) {
    //     obj.gender = 'female'
    //   } else {
    //     obj.gender = 'male'
    //   }  
    //   obj.birthday   = faker.date.between('1990-01-01', '2018-05-30')
    //   obj.email      = faker.internet.email()
    //   obj.phone      = faker.phone.phoneNumberFormat()
    //   obj.createdAt  = new Date()
    //   obj.updatedAt  = new Date()
    //   result.push(obj)
    // }
    //   return queryInterface.bulkInsert('Students',result, {});
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
