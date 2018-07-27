const view = require('../view/view')
const Model = require('../models')

class Student {
  static add(
    first_name, 
    last_name, 
    gender, 
    birthday, 
    email, 
    phone, 
    tinggi_badan
  ) {
    Model.Student
      .create({ 
        first_name, 
        last_name, 
        gender, 
        birthday, 
        email, 
        phone, 
        tinggi_badan
      })
      .then(dataInsert => {
        view.showMessageInsert(dataInsert)
      })
      .catch(err => {
        view.showMessageErr(err)
      })
  }

  static getFullName() {
    Model.Student
      .findAll({
        order: [
          ['id', 'ASC']
        ]
      })
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
              fullName: studentAge.getFullName(), 
              age: studentAge.getAge()
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

  static getFemaleStudent(input) {
    Model.Student
      .getFemaleStudent(input)
      .then(data => {
        view.showFemaleStudent(data)
      })
      .catch(err => {
        view.showMessageErr(err.message)
      })
  }

  static getPhoneNumber() {
    Model.Student
      .findAll()
      .then(data => {
        data.map(phoneStudent => {
          let phone = phoneStudent.getNumberPhone()
          view.showMessage(phone)
        })
      })
      .catch(err => {
        view.showMessageErr(err)
      })
  }

  static update(id, first_name, email) {
    Model.Student
      .update({ first_name, email }, { 
        where: { 
          id: id 
        } 
      })
      .then(() => {
        view.showMessage('Success update')
      })
      .catch(err => {
        view.showMessageErr(err)
      })
  }

  static getAllData() {
    Model.Student
      .findAll({
        order: [
          ['id', 'ASC']
        ]
      })
      .then(dataAll => {
        let dataArr = []
        dataAll.map((data, i) => {
          let allData = {
            no: i+1, 
            id: data.id, 
            first_name: data.first_name, 
            last_name: data.last_name,
            fullName: data.getFullName(),
            gender: data.gender,
            birthday: new Date(data.birthday).toLocaleDateString(),
            age: data.getAge(),
            email: data.email,
            phone: data.getNumberPhone()
          }
          dataArr.push(allData)
        })
        view.showAllData(dataArr)
      })
  }
}

module.exports = Student