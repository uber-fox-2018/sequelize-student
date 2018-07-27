'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: {
      type:DataTypes.STRING,
    validate:{
      args:true,
      msg:'email format is wrong'
    },
    isUnique: (value, next) => {
      student.find({
        where: {
          email:value
        }
      })
      .then((result) =>{
        if(result !== null){
          return next('email is used')
        }
      })
    }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10 - 13],
          msg:'err!'
        }, isNumeric: {
          args: true,
          msg: 'wrong number'
        }
      }
    },
    height: {
      Type:DataTypes.STRING,
      validate: {min:'151'}
    }
  }, 
  {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  
  Student.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function(){
    let bday = new Date(this.birthday) // --> ambil data tahun kelahiran, getFullYear, bawaan dari new DAte()
    let year = new Date().getFullYear()
    let yearNow = year - bday.getFullYear() 
    return yearNow
  }


  Student.female = function(){
    return new Promise((resolve,reject) =>{
      Student.findAll({
        where : { gender : 'female'}
      })
      .then(data =>{
        resolve(data)
        console.log(data)
        
      })
      .catch(err => {
        reject(err)
      })
      
      
    })
  
  // 
  

  }




  return Student;
};

// Student.female()