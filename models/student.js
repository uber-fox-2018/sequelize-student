'use strict';
const sqlite3 = require('sqlite3');

module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});

  Student.associate = function(models) {
    // associations can be defined here
  };

  const model = require('./models');
let student = new model.Student();

model.Student.prototype.getFullName = () => {
  model.Student.findAll({
    attributes: ['first_name', 'last_name']
  })
  .then( data => {
    data.forEach(student => {
      console.log(`${student.first_name} ${student.last_name}`);      
    });
  })
  .catch(err => {
    console.log(err);
  }); 
  
}

// student.getFullName();

model.Student.prototype.getAge = () => {
  model.Student.findAll({
    raw: true,
    attributes: ['id', 'first_name', 'last_name', 'birthday']
  })
  .then( data => {
    data.forEach(student => {
      let fullName = `${student.first_name} ${student.last_name}`;
      let studentBirthYear = student.birthday.slice(0, 4);
      let currentYear = new Date().getFullYear();
      let studentAge = currentYear - parseInt(studentBirthYear);
      console.log(`${student.id}. ${fullName} is ${studentAge} years`);
    })
  })
  .catch(err => {
    console.log(err);
  });
}

// student.getAge();

student.getFemaleStudent = () => {
  model.Student.findAll({
    raw: true,
    attributes: ['id', 'first_name', 'last_name', 'gender'],
    where: {
      gender: "female",
    }
  })
  .then(data => {
    console.log(data);
    // student.getFullName();
  })
  .catch(err => {
    console.log(err);
  });
}

student.getFemaleStudent();
  
  return Student;
};

