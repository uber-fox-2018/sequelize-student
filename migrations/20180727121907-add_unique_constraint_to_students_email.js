'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Students', ['email'], {
      type: 'unique',
      name: 'email_unique_constraint'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Students', 'email_unique_constraint')
  }
};
