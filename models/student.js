'use strict'; 
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `First name can't be empty.`
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Last name can't be empty.`
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['Male', 'Female']],
          msg: `LGBTQ is not allowed!!`
        }
      }
    },
    birthday: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          msg: `the date remains the date!`
        },
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `E-Mail is required.`
        },
        isEmail: {
          msg: `The valid E-Mail is required.`
        }
      },
      unique: {
        msg: `E-Mail address already exists.`
      }
    },
    phone: {
      type: DataTypes.STRING, 
      validate: {
        isNumeric: {
          args: false,
          msg: `Phone must be number.`
        },
        len: {
          args: [10, 13], 
          msg: `Phone length must be 10 - 13.`
        }
      }
    }, 
    height: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: `Must be number.`
        }, 
        min: {
          args: 151,
          msg: `Minimum is 151 cm.`
        }
      }
    }
  }, {});


  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function() {   
    return `${this.first_name} ${this.last_name}`;
  }

  Student.prototype.getAge = function() {
    let today = new Date();
    let birthday = this.birthday;
    return today.getFullYear() - birthday.getFullYear();
  }

  Student.getFemaleStudent = function() {
    return Student.findAll({where : {gender : "Female"}});
  }

  Student.prototype.getPhone = function() {
    return this.phone;
    
  }

  return Student;

};

