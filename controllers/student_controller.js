const View = require('../views/student_view')
const model = require('../models')

class StudentController {
    constructor() { }

    list() {
        model.Student
            .findAll()
            .then(students => View.displayList(students))
    }

    register(first_name, last_name, gender, height, birthday, email, phone) {
        model.Student
            .create({ first_name, last_name, gender: gender.toLowerCase(), height, birthday, email, phone })
            .then(student => View.displayAddSuccess(student))
            .catch(err => View.displayValidations(err.errors));
    }

    femaleOnly() {
        model.Student
            .getFemaleStudents()
            .then(students => View.displayList(students))
            .catch(err => View.displayError(err))
    }

    update() {

    }

    delete(id) {
        model.Student
            .destroy({ where: { id } })
            .then(status => status ?
                View.displayDeleteSuccess(id) :
                View.displayDataNotFound()
            )
            .catch(err => View.displayError(err))
    }

    findByName() {

    }
}

module.exports = StudentController;