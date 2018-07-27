const Model = require("./models");
const View = require("./view.js");

class Student{
    static add(fName, lName, gender, birthday, email, phone, height){
        Model.Student.create({
            first_name : fName,
            last_name : lName,
            gender : gender,
            birthday : new Date(birthday),
            email : email,
            phone : phone,
            height : Number(height)
        })
        .then(data =>{
            View.list(data.dataValues);
        })
        .catch(err =>{
            View.error(err);
        })
    }

    static getAllName(){
        Model.Student.findAll()
        .then(students=>{
            students.forEach(
                student=>{
                        View.list(student.getFullName())
                }
            )
        })
        .catch(err =>{
            View.error(err)
        })
    }

    static getAllAge(){
        Model.Student.findAll()
        .then(students=>{
            students.forEach(
                student=>{
                        View.list(student.getAge())
                }
            )
        })
        .catch(err =>{
            View.error(err)
        })
    }

    static getAllFemaleStudent(){
        Model.Student.getFemaleStudent()
            .then(students=>{
                students.map(student=>{
                    student.full_name =  student.getFullName();
                })
                View.listFemale(students);
            })
            .catch(err =>{
                View.error(err)
            })
    }
}

module.exports= Student;

