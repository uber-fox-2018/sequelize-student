'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      renameColumn(tableName: String, attrNameBefore: String, attrNameAfter: String, options: Object)
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    // return queryInterface.renameColumn('birthdat')
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
