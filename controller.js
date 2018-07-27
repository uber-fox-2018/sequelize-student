let Model = require('./models')
let Student = Model.Student
let View = require('./view.js')

class Controller{

    static c_fullName(){
        Student.findAll()
        .then(data => {
            data.forEach(element => {
                View.showData(element.getFullName());     
            });
        })
        .catch(err => {
            View.showError(err)
        })
    }

    static c_age(){
        Student.findAll()
        .then(data => {
            data.forEach(element => {
                View.showData(element.getAge())
                // console.log(element.getAge());
            })         
        })
        .catch(function(err){
            View.showError(err)

        })
    }

    static c_getFemale(){
        Student.female()
        .then((data) => {
            data.forEach(element =>{
                View.showData(element.dataValues)
                // console.log(element);
                
            })
            // console.log(data);
        })
        .catch(err =>{
            View.showError(err)
        })

    }
}

module.exports = Controller

// Controller.c_getFemale()
