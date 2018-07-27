const Model = require('./models')
const View  = require('./view')

class Controller {
    static getFullName(){
        Model.Student.findAll({
            
        })
        .then((data_student) => {
            data_student.forEach(data => {
                View.showData(data.getFullName())
            })
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static getAge(id){
        Model.Student.findOne({
            where: {id:id}
        })
        .then((data_student) => {
            let birth = data_student.birthday
            View.showData(data_student.getAge(birth))
        })
    }

    static getFemaleStudent(){
        Model.Student.findAll()
        .then((students) => {
            return Model.Student.getFemale(students)
        })
        .then((female_students) => {
            female_students.forEach((data) => {
                View.showData(data.id)
                View.showData(data.first_name)
                View.showData(data.last_name)
                View.showData(data.getFullName())
            })
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static addStudent(first_name,last_name,gender,birthday,email,phone,height){
        Model.Student.create({
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            birthday: new Date(birthday),
            email: email,
            phone: phone,
            height: height
        })
        .then((new_student) => {
            View.showData(new_student)
        })
        .catch((err) => {
            View.showError(err.message)
        })
    }

    static getPhoneNumber(){
        Model.Student.findAll({
            // where: {id:id}
        })
        .then((data) => {
            data.forEach(s => {
                View.showData(s.phoneType(s.phone))
            })
        })
        .catch((err) => {
            View.showError(err)
        })
    }
}

// Controller.getPhoneNumber()