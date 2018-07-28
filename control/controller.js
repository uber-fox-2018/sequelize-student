const Model = require("../models")
const View   = require("../view/view")

class Controller {
    static fullName() {
        Model.students.findAll()
        .then(students => {
            students.forEach(element => {
                let fullName = element.getFullName()
                View.displayFullName(fullName)
            });
        })
        .catch( err => {
            View.displayError(err)
        })
    }

    static age(){
        Model.students.findAll()
        .then(students => {
            students.forEach( element => {
               let ageStudent = element.age()
               View.displayAge(ageStudent)
            })
        })
        .catch( err => {
            View.displayError(err)
        })
    }

    static getFemale(){
       Model.students.getFemaleStudent()
       .then(female => {
           female.forEach(element => {
               let dataFemale = element.get({raw:true})
               let fullName   = element.getFullName()
               let age        = element.age()
            //    console.log(dataFemale)
               View.displayFemale(dataFemale, fullName, age)
           })
       })
    }

    static addDataStudent(first_name, last_name, gender, birthday, email, phone, height){
        Model.students.create({first_name, last_name, gender, birthday, email, phone, height})
        .then()
        .catch( err => {
            View.displayError(err)
        })
    }
    
}

module.exports = Controller