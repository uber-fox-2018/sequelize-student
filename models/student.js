'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Wrong email format'
        },
        isUnique: function (value, cb){
          Student.find({
            where: {
              email: value
            }
          })
          .then(function (err, user){
            if (err){
              return cb (err);
            }
            if(user){
              return cb ('Another user has used that email');
            }
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric:{
          args: true,
          msg: 'Phone is only consisted of numbers'
        },
        not: {
          args: ["[a-z]",'i'],
          msg: 'Theres no letter in phone number'
        },
        len:{
          args: [10,13],
          msg: 'Phone number consisted of 10 to 13 numbers'
        }
      }
    },
    height: {
      type: DataTypes.STRING,
      validate: {
        min: {
          args: 151,
          msg: 'Your height must be taller than 150cm'
        }
      }
    },
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function (){
    return this.first_name + ' ' + this.last_name;
  }

  Student.prototype.getAge = function () {
    var ageDifMs = Date.now() - this.birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  Student.getFemaleStudents = function (cb){
    Student.findAll({where: {gender: 'Female'}})
    .then(femaleStudents => {
      femaleStudents.forEach(student => {
        student.full_name = student.getFullName()
      })
      return cb (femaleStudents)
    })
    .catch(err => {
      return err
    })
  }
  
  return Student;
};