'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING, 
      validate:{
        isEmail:{
          args:true,
          msg:'email should includes @ and .'
        },
        isUnique: function(email,next) {
          student.findOne({where:{email:email}})
          .then((notAvailable)=>{
            if(notAvailable == undefined){
              next()
            }
          })
        }
      }
    },
    phone: {
      type : DataTypes.STRING,
      validate: {
        len:{
          args: [10,13],
          msg: 'Phone must be 10-13 length'
        }
      }
    }, 
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Tinggi harus lebih dari 150'
        }
      }
    } 
  }, {});  


  Student.associate = function(models) {
    // associations can be defined here
  };


    Student.prototype.getFullName = function(){
      return this.firstName +" "+ this.lastName
    }

    Student.prototype.getAge = function(){
      let year = new Date()
      let thisYear = year.getFullYear()
      return  (thisYear - this.birthday.slice(0,4))
    }

    Student.getSpecificGender = function () {
      // return new Promise(function(resolve, reject){
       return Student.findAll({where: {gender: 'female'}})
        .then(function(students){
          for(let i=0; i<students.length; i++){
              console.log(students[i].getFullName())
          }
        })
        .catch(function(err) {
          console.log(err)
        }) 

    }

  return Student;
};