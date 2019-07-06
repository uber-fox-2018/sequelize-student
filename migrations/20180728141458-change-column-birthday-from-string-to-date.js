'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  //  changeColumn(tableName: String, attributeName: String, dataTypeOrOptions: Object, options: Object): Promise
    return queryInterface.removeColumn('Students', 'birthday', {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
      */
    return queryInterface.addColumn('Students', 'birthday', {
      type: Sequelize.DATE,
      allowNull: true,
    });
  }
};
