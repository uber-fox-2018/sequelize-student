'use strict';
module.exports = (sequelize, DataTypes) => {
  var students = sequelize.define('students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    height: DataTypes.STRING
  }, {});
  students.associate = function(models) {
    // associations can be defined here
  };

  students.prototype.getFullName = function(){
    let fullName = this.first_name + ' ' + this.last_name
    return fullName 
  }

  students.prototype.age = function(){
    let dates       = String(new Date())
    let currentYear = Number(dates.substr(11,4))
    let birthday    = this.birthday
    let year        = Number(birthday.substr(0,4))
    return Math.abs(currentYear - year)
  }

  students.getFemaleStudent = function(){
    return this.findAll(
      {where: {gender : "female"}}
    )
  }

  return students;
};