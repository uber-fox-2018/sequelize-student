'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
    
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
   

  // Student.prototype.getFullName = function (first_name, last_name) {
  //   return new Promise ( function (resolve, reject) {
  //     resolve(first_name + ' ' + last_name)
  //   })
  // }

  return Student;
};