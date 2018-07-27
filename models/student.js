'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate:{
        is: {
          args:/^\w+@[a-z]+\.[a-z]{3}$/,
          msg: "The email format is wrong"
        },
        isUnique: (email, next) => {
          Student.find({
            where:{email:email},
            attributes:["id"]
          })
            .done((error, user)=>{
              if(error)
                return next("Email address already in use");
              if(user)
                return next("Email address already in use!");
                next();
            });
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate:{
        isNumeric:{
          msg: "phone must be numbers only"
        },
        len: {
          args:[10,13],
          msg: "Phone length must be 10-13"
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate:{
        min: 150
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  //instance method
  //getFullName
  Student.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`;
  }

  //getAge
  Student.prototype.getAge = function(){
    return new Date().getFullYear() - this.birthday.getFullYear();
 }

 //class method
 //getFemaleStudent
 Student.getFemaleStudent = function(models){
  return Student
  .findAll(
    { where: 
      { gender : "female"}
    }
  )
}
  return Student;
};