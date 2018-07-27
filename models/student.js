'use strict';
module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op
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
          msg: 'Email not valid. Email only (a-z), number (0-9), and point (.) allowed.'
        },
        isEmailUnique: (email, next) => {
          Student
            .find({
              where: {
                email: email
              }
            })
            .then(dataEmail => {
              if (dataEmail !== null) {
                next('Email already use!')
              } else {
                next()
              }
            })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: 'Minimal number phone 10 and max 13'
        }, 
        not: {
          args: ["[a-z]", 'i'],
          msg: 'Number phone not allow letter'
        }
      }
    },
    tinggi_badan: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Minimal height 150 cm'
        },
        max: {
          args: 200,
          msg: 'Maximal height 200 cm'
        }
      }
    }
  }, {});

  // instance method
  Student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}` 
  }

  Student.prototype.getAge = function() {
    return new Date().getFullYear() - this.birthday.getFullYear()
  }

  Student.prototype.getNumberPhone = function() {
    let splitPhone = this.phone.split('')
    let result = []
    let hasilAkhir = []

    for (let i = 0; i < splitPhone.length; i++) {
      if (splitPhone.length === 12) {
        result.push(splitPhone[i])
        if (result.length === 3) {
          hasilAkhir.push(result)
          result = []
        }
      }
    }

    return hasilAkhir.join('-').replace(/,/g, '')
  }

  // class method
  Student.getFemaleStudent = function(gender) {
    return Student.findAll({
      where: {
        gender: {
          [Op.iLike]: `${gender}`
        }
      }
    })
  }

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};