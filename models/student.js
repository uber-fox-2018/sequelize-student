'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birtday: {
      type: DataTypes.STRING,
      validate: {
        args: "2018-12-30",
        msg: 'birthday max 30 - 11 2018'
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'email format must be (foo@bar.com)'
        },
        isUnique: function(email, cb) {
          Student.findOne({ where: { email: email } }).then(function(valid) {
            if (valid) {
              cb('email is already registered');
            } else {
              cb(false);
            }
          });
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: 'Phone length must be 10 - 13'
        },
        isNumeric:{
          args: true,
          msg: 'Phone not allow letters'
        },

      }
    },
    Height: {
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

  //Instance Method
  Student.prototype.getFullName = function (data) {
    let result = `${data.firstName} ${data.lastName}`
    return result
  }

  Student.prototype.getAge = function (data) {
    let student = new Date(data.birtday).getFullYear()
    let now = new Date().getFullYear()
    let result = now - student
    return [`${data.firstName} ${data.lastName} : umur ${result} Tahun`]
  }

  Student.getGender = function (gender, callback) {
    Student.findAll({where: {gender: gender}, raw: true})
    .then((result) => {
      callback(result)
    }).catch((err) => {
      callback(err)
    });
  }

  Student.prototype.formatPhone = function(data) {
    const target = [];
    const array = Array.from(data)
    let count = 1;
    if (array.length <= 12) {
      for (
        const array = Array.from(data);
        array.length;
        target.push(array.splice(0, 3).join(""))
      );
    } else if (array.length === 10) {
      for (let i = 0; 0 < array.length; i++) {
        if (count <= 2) {
          target.push(array.splice(0, 3).join(""));
          count++;
        } else {
          target.push(array.splice(0, 2).join(""));
        }
      }
    } else if (array.length === 11 || array.length === 13) {
      for (let i = 0; 0 < array.length; i++) {
        if (count <= 3) {
          target.push(array.splice(0, 3).join(""));
          count++;
        } else {
          target.push(array.splice(0, 2).join(""));
        }
      }
    }
    return target.join("-");
  };
  

  return Student;
};