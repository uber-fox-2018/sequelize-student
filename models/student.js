'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: Sequelize.STRING,
      validate :{
        is : [/[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/]
      }
    },
    phone: {
      type: Sequelize.STRING,
      validate:{
        len:[10,13],
        is: [/[0-9+-]+/]
      }
    },
    height:{
      type: Sequelize.STRING,
      validate:{
        min: 150
      }
    },
    createdAt : new Date,
    updatedAt : new Date()
  }, {
    classMethods: {
      getFemaleStudent: function() {
        return this.findAll(
          {where: this.gender = "female"}
        )

      }
    }
  });

  Student.prototype.getFullName = function () {
      let fullName = this.first_name + ' ' + this.last_name
      return fullName
  };
  Student.prototype.getAge = function (){
      let birthday = this.birthday
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  Student.getFemaleStudent= function() {
    return this.findAll(
      {where:{gender :"female"} }
    )

  }
  return Student;
};