'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: {
      type: DataTypes.DATEONLY,
    validate: {
      isBefore: {args: "2018-01-01", msg: `Invalid date`}
    }
  },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        isUnique: function (value, next) {
          Student.findOne({ where: { email: value } })
            .then(input => {
              if (input !== null) {
                return next(`Email already exist!`)
              } else {
                return next();
              }
            })
            .catch(err => {
              return next(err);
            })
        }
      }
    },
    phone: {
      type:DataTypes.STRING,
    validate: {
      len: {args: [10, 13], msg: `Phone number length must be 10-13`},
      not: {args: ["[a-z]",'i'], msg: `Phone numbers should not have letters`},
      isAlphanumeric: {args: false, msg: `Phone number should not be alphanumeric`}
    }
  },
    email2: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        isUnique: function (value, next) {
          Student.findOne({ where: { email: value } })
            .then(input => {
              if (input !== null) {
                return next(`Email already exist!`);
              } else {
                return next();
              }
            })
            .catch(err => {
              return next(err);
            })
          }
        }
      },
      height: {
        type: DataTypes.INTEGER,
        validate: {
          min: { args: 150, msg: `Min. height 150 cm` }
        }
      },
      phone2: {
        type:DataTypes.STRING,
      validate: {
        len: {args: [10, 13], msg: `Phone number length must be 10-13`},
        not: {args: ["[a-z]",'i'], msg: `Phone numbers should not have letters`},
        isAlphanumeric: {args: false, msg: `Phone number should not be alphanumeric`}
      }
    }
    }, {});

  //INSTANCE METHOD
  Student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`;
  }

  Student.prototype.getAge = function () {
    var year = this.birthday.slice(0, 4);
    var currentYear = new Date().getFullYear();
    var studentAge = currentYear - year;
    return `${studentAge}`;
  }

  Student.prototype.phoneView = function () {
    let phoneStr = this.phone;
    let str = '';
    let tempArr = [];
    if (phoneStr.length % 3 == 0) { //for 12 digits
      for (let i = 0; i < phoneStr.length; i++) {
        str += phoneStr[i];
        if(str.length == 3) {
          tempArr.push(str);
          str = '';
        }
      }
    } else {
      for (let i = 0; i < phoneStr.length; i++) {
        if (i > phoneStr.length - 4) {
          str += phoneStr[i];
          if (str.length == 2) {
            tempArr.push(str);
            // console.log('...', tempArr)
            str = '';
          }
        } else {
          str += phoneStr[i];
          if (str.length == 3) {
            tempArr.push(str);
            // console.log('---', tempArr);
            str = '';
          }
        }
      }
    }
    return tempArr.join('-');
  }

  // CLASS METHOD
  Student.getFemaleStudent = function () {
    return new Promise((resolve, reject) => {
      Student.findAll({ where: { gender: "female" } })
        .then(femaleStudents => {
          femaleStudents.forEach(femaleStudent => {
            femaleStudent.fullName = femaleStudent.getFullName();
            femaleStudent.age = femaleStudent.getAge();
          })
          resolve(femaleStudents);
        })
        .catch(err => {
          reject(err)
        })
    })
  }



  Student.associate = function (models) {
    // associations can be defined here
  };
  return Student;
};