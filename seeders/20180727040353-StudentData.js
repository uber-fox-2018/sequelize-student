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
   return queryInterface.bulkInsert('Students',[{
      first_name : "khodhi",
      last_name: "robbani",
      gender: "male",
      birthday: new Date(),
      createdAt : new Date(),
      updatedAt: new Date()
   },{
    first_name : "alex",
    last_name: "cuy",
    gender: "male",
    birthday: new Date(),
    createdAt : new Date(),
    updatedAt: new Date()
 },{
  first_name : "do",
  last_name: "di",
  gender: "male",
  birthday: new Date(),
  createdAt : new Date(),
  updatedAt: new Date()
},{
  first_name : "bi",
  last_name: "ji",
  gender: "male",
  birthday: new Date(),
  createdAt : new Date(),
  updatedAt: new Date()
},{
  first_name : "ku",
  last_name: "ya",
  gender: "male",
  birthday: new Date(),
  createdAt : new Date(),
  updatedAt: new Date()
},{
  first_name : "no",
  last_name: "ani",
  gender: "male",
  birthday: new Date(),
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
   return queryInterface.bulkDelete('Students',null,{});
  }

};
