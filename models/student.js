'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: {
      type: DataTypes.DATE,
      validate: {
        isBefore: {
          args: '2018-01-01',
          msg: 'only allow date before a 2018-01-01'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'email format is wrong, checks for email format (foo@bar.com)'
        },
        isUnique: function(email, callback) {
          Student.findOne(
            { where: 
              {
                email: email
              }
            })
          .then(function(valid)  {
            if(valid) {
              callback(`email already in used`)
            } else {
              callback()
            }
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          args: true,
          msg: `phone not allow letters`
        },
        isAlphanumeric: {
          args: false,
          msg: `phone not allow alphanumeric`
        },
        len: {
          args: [10,13],
          msg: `Phone length must be 10 - 13`
        }
      }  
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Tinggi badan harus di atas 150 cm'
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function(birthday) {
    let birthYear = new Date(birthday)
    let currentYear = new Date()
    let age = currentYear.getFullYear() - birthYear.getFullYear()
    return `umur si ${this.first_name} ${this.last_name} adalah ${age}`
  }

  Student.getFemaleStudent = function() {
    return Student.findAll(
      {
        where: { gender: 'Female'}, raw: true
      }
    )
  }

  Student.prototype.phoneFormat = function(phoneNumber) {
    // console.log(phoneNumber.length)
    let string = ''
    let array = []
    if(phoneNumber.length % 3 === 0) { // when phone length is 12
      for (let i = 0; i < phoneNumber.length; i++) {
        string += phoneNumber[i]
        if(string.length == 3) {
          array.push(string)
          string = ''
        }
      }
    } else {
      for(let i = 0; i < phoneNumber.length; i++) {
        if(i > phoneNumber.length-4 && phoneNumber.length !== 11) {
          string += phoneNumber[i]
          if(string.length == 2) {
            array.push(string)
            string = ''
          }
        } else {
          string += phoneNumber[i]
          if(string.length == 3) {
            array.push(string)
            string = ''
          }
        }
      }
    }
    return array.join('-')
  }

  return Student;
};

