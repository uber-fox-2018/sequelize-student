'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    tinggi_badan: DataTypes.INTEGER
  }, {});

  // instance method
  Student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}` 
  }

  Student.prototype.getAge = function() {
    return 2018 - this.birthday.getFullYear()
  }

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};