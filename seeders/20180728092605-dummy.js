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
   return queryInterface.bulkInsert('students',[{
      first_name : "harles",
      last_name: "bayu",
      gender: "male",
      birthday: "1995-07-20",
      email: "harles@gmail.com",
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      first_name : "gara",
      last_name: "sunara",
      gender: "male",
      birthday: "1992-01-02",
      email: "gara@gmail.com",
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      first_name : "dimas",
      last_name: "cahya",
      gender: "male",
      birthday: "1990-04-01",
      email: "dimas@gmail.com",
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      first_name : "sakura",
      last_name: "haruno",
      gender: "female",
      birthday: "1998-09-23",
      email: "sakura@gmail.com",
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      first_name : "naruto",
      last_name: "uzumaki",
      gender: "male",
      birthday: "1997-03-12",
      email: "naruto@gmail.com",
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      first_name : "rias",
      last_name: "gremory",
      gender: "male",
      birthday: "1981-11-17",
      email: "naruto@gmail.com",
      createdAt : new Date(),
      updatedAt: new Date()
    }],{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('students', null, {});
  }
};
