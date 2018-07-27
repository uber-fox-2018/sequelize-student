'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn(
      'Student',
      'height',
     Sequelize.INTEGER
    );
     
    
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'Student',
      'height'
    );

  }
};
