const view = require('../view/view')
const Model = require('../models')

class Student {
  static add(...data) {
    let first_name = data[0]
    let last_name = data[1]
    let gender = data[2]
    let birthday = data[3]
    let email = data[4]
    let phone = data[5]
    Model.Student
      .create({ first_name, last_name, gender, birthday, email, phone })
      .then(dataInsert => {
        view.showMessageInsert(dataInsert)
      })
      .catch(err => {
        view.showMessageErr(err)
      })
  }

  static getFullName() {
    Model.Student
      .findAll()
      .then(dataStudent => {
        if (dataStudent.length !== 0) {
          let fullNameArr = []
          dataStudent.map(student => {
            let dataFullName = student.getFullName()
            fullNameArr.push(dataFullName)
          })
          view.showFullName(fullNameArr)
        } else {
          let msg = 'Data is empty!'
          view.showMessage(msg)
        }
      })
      .catch(err => {
        view.showMessageErr(err)
      })
  }

  static getAge() {
    Model.Student
      .findAll()
      .then(dataAgeStudent => {
        if (dataAgeStudent.length !== 0) {
          let dataStudentArr = []

          dataAgeStudent.map(studentAge => {
            let getFullNameAndAge = { 
              fullName: `${studentAge.getFullName()}`, 
              age: `${studentAge.getAge()}`
            }
            dataStudentArr.push(getFullNameAndAge)
          })
          
          view.showStudentAge(dataStudentArr)
        } else {
          let msg = 'Data is empty!'
          view.showMessage(msg)
        }
      })
      .catch(err => {
        view.showMessageErr(err)
      })
  }
}

// Student.add('Ari', 'Supriatna', 'Male', '1999-08-14', 'arisupriatna@gmail.com', '085777282844')
// Student.getAge()
// Student.getFullName()
module.exports = Student