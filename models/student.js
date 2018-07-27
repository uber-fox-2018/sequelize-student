"use strict";
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define(
    "Student",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthday: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: "email must contain @ and . or email alreay been used"
          },
          isUnique: function(email, cb) {
            Student.findOne({ where: { email: email } }).then(function(valid) {
              if (valid) {
                cb(true);
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
            args: [10, 13],
            msg: "error!"
          },
          isNumeric: {
            args: true,
            msg: "its not a number"
          },
          isAlphanumeric: true
        }
      },
      height: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
            args: 150,
            msg: "minimak tinggi badan 150 cm"
          }
        }
      }
    },
    {}
  );
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.findFullName = function() {
    return [`fullName => ${this.firstName} ${this.lastName}`];
  };

  Student.prototype.getAge = function() {
    let yearBorn = new Date(this.birthday).getFullYear();

    let yearNow = new Date().getFullYear();
    return [`Current Age => `, yearNow - yearBorn];
  };

  Student.prototype.formatPhone = function() {
    let phone = this.phone;
    const target = [];
    const array = Array.from(phone);
    let count = 1;
    if (array.length === 12) {
      for (
        const array = Array.from(phone);
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
  Student.findGender = function(gender, cb) {
    Student.findAll({ where: { gender: gender } }, { raw: true })
      .then(data => {
        cb(data);
      })
      .catch(err => {
        cb(err);
      });
  };

  return Student;
};
