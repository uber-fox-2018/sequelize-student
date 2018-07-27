'use strict';
let fs = require(`fs`)

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
    let rawData = fs.readFileSync(`./students.json`)
    let file = JSON.parse(rawData)

    let res = []
    for (let i = 0; i < file.length; i++) {
      file[i].createdAt = new Date
      file[i].updatedAt = new Date
      res.push(file[i])
    }  
    return queryInterface.bulkInsert('students',res, {}); 
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
