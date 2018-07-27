'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  
  // instance method
  Student.prototype.getFullName = function() {
    let full_name = this.first_name + ' ' + this.last_name
    this.full_name = full_name
  }

  Student.prototype.full_name = null

  Student.prototype.getAge = function(age) {
    var ageDifMs = Date.now() - age.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - age.substr(0,4) );
    
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return ageDate;
  }

  // static method
  // Student.getFullName = (a, b) => {
  //   return new Promise((resolve, reject) => {
  //     resolve(a + ' ' + b)   
  //   })
  // }

  return Student;
};