'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg: "Email format is wrong"
        },
        //for create only
        isUnique: function(value,next){
          var self = this;
          Student.find({
            where:{
              email:value
            }
          })
          .then(function(student){
            if(student && self.id !== student.id){
              return next('Email already used !!')
            }
            next()
          })
          .catch(function(err){
            return next(err)
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate:{
        len:{
          args:[10,13],
          msg:'Phone length must be 10-13'
        },
        not:{
          args:["[a-z]",'i'],
          msg:'Phone not allow letters'
        },
        isAlphanumeric:{
          args:true,
          msg:'Phone not allow alphanumeric'
        }
      }
    },
    height: {
      type: DataTypes.STRING,
      validate:{
        min:150
      },
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.getFemaleStudent = function(){
    return new Promise((resolve,reject)=>{
      Student.findAll({
        where:{gender:'female'}
      })
      .then(function(femaleStudents){
        resolve(femaleStudents)
      })
      .catch(function(){
        let message = {error: 'data not found'}
        reject(message.error)
      })
    })
  }

  Student.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}` 
  }

  Student.prototype.getAge = function(){
    let birthYear = this.birthday.getFullYear()
    let currentYear = (new Date()).getFullYear()
    let age = currentYear - birthYear
    return age
  }

  return Student;
};