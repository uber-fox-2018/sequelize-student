const Model = require('./models');
const View = require('./View')

class Controller {
    constructor(input) {
        this.input = input.slice(2)
    }

    findAll() {
        Model.Student.findAll()
        .then(function(students) {
            console.log(students)
            // View.DisplayStudent(students)
        })
    }

    create() {
        let first_name = this.input[0]
        let last_name = this.input[1]
        let gender = this.input[2]
        let birthdat = this.input[3]
        let phone = this.input[4]
        let email = this.input[5]

        let student = {
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            birthdat: birthdat,
            phone: phone,
            email: email
        }
        Model.Student.create(student)
        .then(student => {
            View.DisplayNewRecord(student)
        })
    }

    help() {
        console.log("Help")
    }
}

module.exports = Controller