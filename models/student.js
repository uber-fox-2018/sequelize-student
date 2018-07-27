'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2,30],
          msg: "First Name mush beetween 2 and 30"
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2,30],
          msg: "Last Name mush beetween 2 and 30"
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [["female","male"]],
          msg: "Just male or female"
        }
      }
    },
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Its not email"
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          msg: "Phone must number"
        }
      }
    },
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  
  // instance method
  Student.prototype.getFullName = function() {
    let full_name = this.first_name + ' ' + this.last_name
    return full_name
  }

  Student.prototype.full_name = null

  Student.prototype.getAge = function(age) {
    let nowYears = new Date
    let bornYears = new Date(age)
    return nowYears.getFullYear - bornYears.getFullYear;
  }

  // static method
  // Student.getFullName = (a, b) => {
  //   return new Promise((resolve, reject) => {
  //     resolve(a + ' ' + b)   
  //   })
  // }

  return Student;
};