'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Students', 'email2', {type: Sequelize.STRING})
   .then(() => {
     queryInterface.addColumn('Students', 'height', {type: Sequelize.INTEGER})
     .then(() => {
       queryInterface.addColumn('Students', 'phone2', {type: Sequelize.STRING})
     })
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Students', 'email2')
    .then(() => {
      queryInterface.removeColumn('Students', 'height')
      .then(() => {
        queryInterface.removeColumn('Students', 'phone2')
      })
    })
  }
};
