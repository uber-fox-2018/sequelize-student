'use strict';
const Model = require('../models')

function test(){
  console.log('etsts');
  
}


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
    let a = Model.student.findAll({
        attributes:['*']
    })
    .then(data =>{
      // console.log('test');
      
      //   for(let i = 0 ; i < data.length ; i++){
      //     let randomHeight = Math.floor(Math.random() * 70) + 130
      //     let obj={
      //       height:randomHeight
      //     }
      //     res.push(obj)
      //   }
      console.log(data);
      
        return data
    })
    console.log(a.then(data =>{
      return data
    }))
    

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('students',null, {});
  }
};
