'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Students','height',{type : Sequelize.INTEGER})
     
      // queryInterface.addColumn('Students','email',{type : Sequelize.STRING}),
    
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    // return [
      // queryInterface.removeColumn('Students','email'),
      return queryInterface.removeColumn('Students','height')
    // ]
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
