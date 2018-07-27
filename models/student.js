'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {type :DataTypes.STRING,
            validate : {
              isEmail : {
                args : true,
                msg : 'format email must be xxx@yy.com'
              },
              isUnique: function (value, next) {
                // var self = this;
                Student.findAll({where: {email: value}})
                    .then(function (user) {
                      if(user.length !== 0){
                        next('Email already in use!')
                      }
                      next()
            
                    })
                    .catch(function (err) {
                        next(err);
                    });
            }
            }},
    phone: {type : DataTypes.STRING,
            validate : {
              len : {
                args : [10,12],
                msg : `phone length between 10-12`
              },
              isNumeric : {
                args : true,
                msg : 'phone number must be a number'
              }
            }},
    height : {type : DataTypes.INTEGER,
              validate : {
                min : {
                  args : 149,
                  msg : `minimal height 150`
                }
              }},
  }, {});


  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.getFemale = () => {
    return new Promise (function(res,rej){
      Student.findAll({where : {gender : 'Female'}})
      .then((dataFemale)=>{
        // console.log(dataFemale);
        var arr = []
        dataFemale.forEach(data => {
          data.dataValues.full_name = data.getFullName()
          arr.push(data)
        });
        res(arr)
      })
  
      .catch(err =>{
        rej(err)
      })
    })
  }

  Student.prototype.getPhone = function(){
    var phone = this.phone
    if(phone.length % 3 === 0){
      var limit = 2
      var str = ''
     for(var i = 0; i < phone.length;i++){
         if(i === phone.length-1){
             str += phone[i]
         }else if(i === limit){
             str += phone[i] +'-'
             limit += 3
         }else{
             str += phone[i]
             
         }
     }

  }else if(phone.length % 3 === 2) {
      var limit = 2
      var str = ''
      for(var i = 0; i < phone.length;i++){
         if(i > phone.length-3){
             str += phone[i]
         }else if(i === limit){
              str += phone[i] +'-'
              limit += 3
          }else{
              str += phone[i]
              
          }
      }

  }else{
      var limit = 2
      var str = ''
      for(var i = 0; i < phone.length;i++){
         if(i > phone.length-5){
             if(i === phone.length-3){
                 str += phone[i]+'-'
             }else{
                 str+= phone[i]
             }
         }else if(i === limit){
              str += phone[i] +'-'
              limit += 3
          }else{
              str += phone[i]
              
          }
      }
      
      
  }
    return str
  }


  Student.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function(){
    var today = new Date();
    var birthday = this.birthday
    var age = today.getFullYear() - birthday.getFullYear();    
    return age;
  }
  return Student;
};