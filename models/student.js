'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: {
      type: DataTypes.DATEONLY,
      validate: {
        isBefore: {
          args: "2018-01-01",
          msg: `Anda Belum Lahir :D`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Invalid Email`
        },
        isUnique: function(value,cb){
          Student.findOne({
            where: {email: value}
          })
          .then(function(err,data) {
            if (err) {
              return cb(err)
            }else {
              if (data !== undefined) {
                let msg = {msg: `Email is already used!` }
                return cb(msg)
              }else {
                return cb()
              }
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
          msg: `Phone not allow letters`
        },
        len: {
          args: [10,13],
          msg: `Phone length must be 10 - 13`
        },
        isAlphaNumeric: {
          args: false,
          msg: `Phone not allow alphanumeric`
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 151,
          msg: `Minimum height is 151`
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function(birthday){
    let now = new Date()
    let myBirthDate = new Date(birthday)
    return now.getFullYear() - myBirthDate.getFullYear()
  }

  Student.getFemale = function(students){
    let female_students = []
    for (let i = 0; i < students.length; i++) {
      if (students[i].gender == 'female') {
        female_students.push(students[i])
      }
    }
    return female_students
  }

  Student.prototype.phoneType = function(phone_number){
    let string = ''
    let arr = []
    if (phone_number.length % 3 == 0) {
      for (let i = 0; i < phone_number.length; i++) {
        string += phone_number[i]
        if (string.length == 3) {
          arr.push(string)
          string = ''
        }
      }
    }else {
        for (let i = 0; i < phone_number.length; i++) {
            if (i > phone_number.length-4 && phone_number.length !== 11) {
                string += phone_number[i]
                if (string.length == 2) {
                    arr.push(string)
                    string = ''
                }
            }else {
                string += phone_number[i]
                if (string.length == 3) {
                    arr.push(string)
                    string = ''
                }
            }
        }
    }
    return arr.join('-')
  }

  return Student;
};
