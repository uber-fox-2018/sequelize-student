"use strict";
let faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
   
    */
    return queryInterface.bulkInsert(
      "Students",
      [
        {
          firstName: faker.name.findName(),
          lastName: faker.name.lastName(),
          gender: "female",
          birthday: faker.date.between("1990-01-01", "2000-01-05"),
          email: "lionhotmailcom",
          phone: faker.random.number({ min: 6280000000, max: 628999900000 }),
          height: 130
        }
      ],
      {}
    );
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
