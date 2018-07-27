const Model = require('../models/index')
const View = require('../view/student')

class Controller {

    static addStudent(firstName,lastName,gender,birthday,email,phone,height){
        Model.Student
        .create({
            first_name:firstName,
            last_name:lastName,
            gender:gender,
            birthday:birthday,
            email:email,
            phone:phone,
            height:height
        })
        .then(function(data){
            View.read(data)
        })
        .catch(function(err){
            View.read(err.message)
        })

    }

    static getFullName() {
        Model.Student
            .findAll()
            .then((dataArray) => {
                dataArray.forEach(element => {
                    View.read(element.getFullName())
                });
            })
            .catch(() => {
                View.error()
            })
    }

    static getAge() {
        Model.Student
            .findAll()
            .then((dataArray) => {
                dataArray.forEach(element => {
                    View.read(element.getAge())
                });
            })
            .catch(() => {
                View.error()
            })
    }

    static getFemaleStudent() {
        Model.Student.getFemaleStudent()
            .then((femaleStudents) => {
                femaleStudents.forEach(element => {
                    View.read(element.getFullName())
                });
            })
            .catch(() => {
                View.error()
            })
    }
}



module.exports = Controller