let Model = require('../models')
let View = require('../view')

class Control {
    static fullName (){ 
        Model.Student.findAll()
         .then(students => {
            students.forEach(element => {
                let fullName = element.getFullName()
                View.showFullName(fullName)
            });
         })
         .catch(err =>{
             View.showError(err)
         })  
    }

    static age(){
        Model.Student.findAll()
        .then(students =>{
            students.forEach(element =>{
                let age = element.getAge()
                View.showAge(age)
            })
        })
        .catch(err =>{
            View.showError(err)
        })
    }

    static getFemale (){
        Model.Student.getFemaleStudent()
        .then(femaleStudent =>{
            femaleStudent.forEach(element => {
                let dataFemale = element.get({plain:true})
                let fullName = element.getFullName()
                let age = element.getAge()
                View.femaleStudent(dataFemale,fullName,age)
            });
        })
        .catch(err => {
            View.showError(err)
        })
    }

    static create(first_name,last_name,gender,birthday,email,phone,height){
        Model.Student.create({first_name,last_name,gender,birthday,email,phone,height})
        .then()
        .catch( err =>{
            console.log(err.message)
        })
        
    }

}

module.exports = Control