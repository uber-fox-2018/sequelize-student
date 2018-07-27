'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: {
      type: DataTypes.DATE,
      validate: {
        isBefore: {
          args: '2018-12-12',
          msg: 'Your Birthday must be under 2018'
        } 
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          let self = this
          Student.findOne({
            where: {
              email: value
            }
          })
          .then(user => {
            if(user && self.id !== user.id) {
              return next('Email already in use!');
            }
            next()
          })
          .catch(err => {
            return next(err)
          })  
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        len: [10, 13],
        isAlpha: false,
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate : {
        min: {
          args: 150,
          msg: 'Your Height Must be >= 150'
        } 
      }
    }
  }, {});
  // Student.associate = function(models) {
  //   // associations can be defined here
  // };

  // instance Methode
  Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }

  Student.prototype.getAge = function () {
    let birthDay = this.birthday
    let year = birthDay.getFullYear()
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let age = +currentYear - +year
    return age
  }

  //class methode
  Student.getFemaleStudent = function(arrayObj) {
    // return obj
    let containArr = []
    arrayObj.forEach(obj => {
      if(obj.gender === 'female') {
        obj.fullName = obj.getFullName()
        containArr.push(obj)
      }
    })
    return containArr
  }

  Student.formatPhone = function(phoneNumber) {
    
  }

  return Student;
};