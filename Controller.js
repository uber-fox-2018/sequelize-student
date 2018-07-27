const Model = require('./models');
const View = require('./View')

class Controller {
    constructor(input) {
        this.input = input.slice(2)
    }

    findAll() {
        Model.Student.findAll({raw:true})
        .then(function(students) {
            for(let i of students) {
                View.DisplayStudent(i)
            }
        })
    }

    findFullName() {
        Model.Student.findAll()
        .then(function(students) {
            for(let i of students) {
                View.DisplayStudent(i.getFullName())
            }
        })
    }

    create() {
        let first_name = this.input[0]
        let last_name = this.input[1]
        let gender = this.input[2]
        let birthday = this.input[3]
        let phone = this.input[4]
        let email = this.input[5]

        let student = {
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            birthday: birthday,
            phone: phone,
            email: email
        }
        Model.Student.create(student)
        .then(student => {
            View.DisplayNewRecord(student)
        })
        .catch( data => {
            console.log(data.errors[0].message);
            
        }

        )
    }

    help() {
        console.log("Help")
    }
}

module.exports = Controller