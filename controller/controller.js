const model = require('../models');
const view = require('../view/view');

class Controller {

  static getFullName() {
    model.Student.findAll()
      .then(students => {
        if(!students) {
          view.result(`Data not found!`);
        }
        else {
          students.map(data => {
            const fullName = data.getFullName();
            view.result(fullName);
          })
        }
      })
      .catch(err => {
        view.error(err);
      });
  }

  static getAge() {
    model.Student.findAll()
      .then(data => {
        data.forEach(student => {
          let studentsAge = student.getAge();
          view.result(studentsAge);
        })
      })
      .catch(err => {
        view.error(err);
      });

  }

  static getFemaleStudent() {
    model.Student.getFemaleStudent()
      .then(femaleStudent => {
        femaleStudent.map(data => {
          view.result(data.dataValues);
        });
      })
      .catch(err => {
        view.error(err);
      });
  }
  
  static getPhone() {
    model.Student.findAll()
      .then(data => {
        data.map(students => {
          view.result(students.dataValues.phone);
        })
      })
      .catch(err => {
        view.error(err);
      });
    
  }

  static add(studentInput) {
    model.Student.create(studentInput)
      .then(data => {
        view.result('Data successfully added');
      }) 
      .catch(err => {
        view.error(err);
      });
  }

  static delete(id) {
    model.Student.destroy({where: {id: id}})
      .then(data => {
        // console.log(data);
        if(!data) {
          view.result(`ID ${id} doesn't exists.`);
        } 
        else {
          view.result('Data succesfully deleted.');
        }
      })
      .catch(err => {
        view.error(err);
      });
  }

  static update(studentData) {
    model.Student.update(studentData, {where: {id: studentData.id}})
      .then(data => {
        if(!studentData.id) {
          view.result(`Data doesn't exists.`);
        } 
        else {
          view.result('Data succesfully updated');
        }
      })
      .catch(err => {
        view.error(err);
      });
    
  }

  static help() {
    let guide = [
      'node index getFullName',
      'node index getAge',
      'node index getFemale',
      'node index getPhone',
      'node index.js add <first_name> <last_name> <gender> <birthday> <email> <phone> <height>',
      'node index.js update <id> <first_name> <last_name> <gender> <birthday> <email> <phone> <height>',
      'node index.js delete <id>'
    ].forEach(list => {
      view.help(list)

    })

  }

}

module.exports = Controller;