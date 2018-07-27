const ModelStudent = require('../models')
const View  = require('../views/views')

class ControllerStudent {

    static fullNameStudent() {
        ModelStudent.Student.findAll()
        .then(dataStudents => {
            // INGET ARRAY OF OBJECT
            dataStudents.forEach(dataStudent => {
                let fullName = dataStudent.getFullName() // instance methode
                View.displayMessage(fullName)
            })
        })
        .catch(err => {
            View.displayErrorMessage(err.message)
        })
    }

    static ageStudents() {
        ModelStudent.Student.findAll()
        .then(dataStudents => {
            dataStudents.forEach(dataStudent => {
                let age = dataStudent.getAge() // instance methode
                View.displayMessage(age)
            })
        })
        .catch(err => {
            View.displayErrorMessage(err)
        })
    }

    static femaleStudent() {
        ModelStudent.Student.findAll()
        .then(dataStudents => {
            let femaleStudents = ModelStudent.Student.getFemaleStudent(dataStudents)
            femaleStudents.forEach(femaleStudent => {
                View.displayMessage(femaleStudent.id)
                View.displayMessage(femaleStudent.firstName)
                View.displayMessage(femaleStudent.lastName)
                View.displayMessage(femaleStudent.fullName)
            })
        })
        .catch(err=>{
            View.displayErrorMessage(err)
        })
    }

    static addStudent(newStudent) {
        ModelStudent.Student.create(newStudent)
        .then(dataInserted => {
            let msg = `${dataInserted.getFullName()} has been inserted with ID : ${dataInserted.id}`
            View.displayMessage(msg)
        })
        .catch(err => {
            View.displayErrorMessage(err.message)
        })
    }

    static removeStudent(id) {
        ModelStudent.Student.destroy({
            where: {
                id:id
            }
        })
        .then(removed => {
            if(removed === 0) {
                View.displayErrorMessage(`data not found`)
            } else {
                View.displayMessage(`Data Successfully to deleted`)
            }
        })
        .catch(err => {
            View.displayErrorMessage(err.message)
        })
    }

    static getPhoneNumber() {
        ModelStudent.Student.findAll()
        .then(data => {
            // console.log(data);
            
            data.forEach(element => {
                let phoneFormat = ModelStudent.Student.formatPhone(element.phone)
                // console.log(element.phone);
                console.log(phoneFormat);
                
            })
        })
        .catch(err => {

        })
    }
}

module.exports = ControllerStudent