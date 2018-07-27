const Model = require('../models');
const View = require('../views/view');

class Controller {
  static showAll (){
    Model.Student.findAll({raw:true})
    .then (students => {
      return View.table(students);
    })
    .catch (err => {
      return View.message(err.message);
    })
  }

  static showAllFemale (){
    Model.Student.getFemaleStudents(femaleStudents => {
      femaleStudents.forEach(student => {
          View.message(student.id)
          View.message(student.first_name)
          View.message(student.last_name)
          View.message(student.full_name)
          View.message(student.getAge())
      })
    })
  }
}

module.exports = Controller;