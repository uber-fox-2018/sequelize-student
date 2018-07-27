'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.addColumn('Students', 'tinggi_badan', { 
        allowNull: true,
        type: Sequelize.INTEGER,
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Students', 'tinggi_badan', {})
  }
};
