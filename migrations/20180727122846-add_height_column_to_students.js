'use strict';
const Sequelize = require('sequelize')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Students', 'height', Sequelize.INTEGER)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Students', 'height')
  }
};
