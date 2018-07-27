'use strict';

module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: {
      type: DataTypes.STRING,
      validate: {
        isIn: { args: [['male', 'female']], msg: "Gender is only 'male' or 'female'" }
      }
    },
    birthday: {
      type: DataTypes.DATE,
      validate: {
        isDate: { msg: "Invalid date" }
      }
    },

    email: {
      type: DataTypes.STRING,
      unique: { msg: "Email is already in use" },
      validate: {
        isEmail: { msg: "Email is not valid" }
      }
    },

    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: { msg: "Phone not allow letters" },
        len: { args: [10, 13], msg: "Phone number length must be 10-13" }
      }
    },

    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: { args: 150, msg: "Height have to be above 150 cm" },
        isNumeric: { msg: "Height not allow letters" },
      }
    }

  }, {});

  Student.associate = function (models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function (models) {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function (models) {
    var ageDifMs = Date.now() - this.birthday.getTime()
    var ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  Student.getFemaleStudents = function (models) {
    return this
      .findAll({
        where: { gender: 'female' }
      });
  }

  Student.getMaleStudents = function (models) {
    return this
      .findAll({
        where: { gender: 'male' }
      });
  }



  return Student;
};