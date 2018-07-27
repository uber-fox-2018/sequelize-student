'use strict';

module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    firstName: {
      type:DataTypes.STRING,
      validate: {
       isAlpha: {
         msg: "first name must be aplhanumeric"
       }
      }  
     },
    lastName: {
     type:DataTypes.STRING,
     validate: {
      isAlpha: {
        msg: "last name must be aplhanumeric"
      }
     }  
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args:[['male', 'female']],
          msg:"must be an Male or Female"
        }
      }
    },
    birthday: {
      type: DataTypes.STRING,
      validate: {
        isBefore: {
          args:"2011-11-05",
          msg:"to young"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "checks for email format"
        }
      }
    },
    phone: DataTypes.STRING,
    tinggiBadan: DataTypes.INTEGER
  }, {});
  student.associate = function(models) {
    
  };
  return student;
};

