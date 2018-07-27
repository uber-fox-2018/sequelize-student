'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'Students',
        'email',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),
      queryInterface.addColumn(
        'Students',
        'phone',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),
      queryInterface.addColumn(
        'Students',
        'height',
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      ),
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Students', 'email'),
      queryInterface.removeColumn('Students', 'phone'),
      queryInterface.removeColumn('Students', 'height')      
    ];
  }
};
