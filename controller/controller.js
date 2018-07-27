var Model = require('../models/index')
var View = require('../view/view')

class Controller{
    static getFullName(id){
        Model.Student.findById(id)
        .then(obj =>{
            if(obj === null){
                View.info(`data not found`)
            }else{
                var fullname = obj.getFullName()
                View.info(fullname)
            }
            
        })

        .catch(err =>{
            View.info(err)
        })
    }

    static getAge(id){
        Model.Student.findById(id)
        .then(obj =>{
            if(obj === null){
                View.info(`data not found`)
            }else{
                var age = obj.getAge()
                View.info(age)
            }
            
        })
    }

    static getFemale(){
        Model.Student.getFemale()
        .then(femaleStudents => {
            femaleStudents.forEach(femaleStudent => {
                View.info(femaleStudent.dataValues.id)
                View.info(femaleStudent.dataValues.first_name)
                View.info(femaleStudent.dataValues.last_name)
                View.info(femaleStudent.dataValues.full_name)
            });
        })

        .catch(err =>{
            View.info(err)
        })
    }


    static add(obj){
        Model.Student.create(obj)
        .then(data =>{
            View.table(data.dataValues)
        })

        .catch(err =>{
            // View.info(err)
            // View.info(err.message)
            View.info(err.errors[0].message);
        })
    }

    static getPhone(id){
        Model.Student.findById(id)
        .then(data =>{
            console.log(data.getPhone());
            
        })

        .catch(err=>{
            console.log(err);
            
        })
    }
}

module.exports = Controller