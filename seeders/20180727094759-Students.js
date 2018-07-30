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
   return queryInterface.bulkInsert('Students',[
    {
      "first_name": "Carla",
      "last_name": "Kobus",
      "gender": "Female",
      "birthday": new Date('1995','01','20'),
      "email": "ckobus0@com.com",
      "phone": "895-695-0074"
    },
    {
      "first_name": "Timmi",
      "last_name": "Copeland",
      "gender": "Female",
      "birthday": new Date('2012','05','20'),
      "email": "tcopeland1@huffingtonpost.com",
      "phone": "294-235-3348"
    },
    {
      "first_name": "Deeanne",
      "last_name": "Dienes",
      "gender": "Female",
      "birthday": new Date('1986','11','15'),
      "email": "ddienes2@google.co.uk",
      "phone": "506-114-5639"
    },
    {
      "first_name": "Skipp",
      "last_name": "Pales",
      "gender": "Male",
      "birthday": new Date('2010','10','20'),
      "email": "spales3@drupal.org",
      "phone": "168-689-5990"
    },
    {
      "first_name": "Gavan",
      "last_name": "Gratten",
      "gender": "Male",
      "birthday": new Date('1970','05','11'),
      "email": "ggratten4@ted.com",
      "phone": "253-445-6407"
    }
  ],{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Students', null, {})
  }
};
