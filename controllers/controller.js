const Model = require('../models/')
const View = require('../views/view')
const Student = Model.Student

class Controller {
    static findById(id) {
        Student.findById(id, 
        {
            where: { id:id }
            
        })
        .then(data => {
            View.displayData(data.dataValues)
        })
        .catch(err => {
            let msg = {msg: `Data not found`}
            View.displayError(msg.msg)
        })
    }

    static findAll() {
        Student.findAll({
            raw: true
        })
        .then(data => {
            View.displayData(data)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static getFullName(id) {
        Student.findById(id, {
            where: {id:id}
        })
        .then(data => {
            View.displayData(data.getFullName())
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static getAge(id) {
        Student.findById(id, 
        {
            where: {id:id}
        })
        .then(data => {
           View.displayData(data.getAge(data.dataValues.birthday))
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static getFemaleStudent() {
        Student.getFemaleStudent()
        .then((data) => {
            data.forEach(dataFemaleStudent => {
                var fullName = `${dataFemaleStudent.first_name} ${dataFemaleStudent.last_name}`
                View.displayData(dataFemaleStudent.id)
                View.displayData(dataFemaleStudent.last_name)
                View.displayData(fullName)
            })
        })
        .catch((err) => {
            View.displayError(err)
        })
    }

    static create(first_name, last_name, gender, birthday, email, phone, height) {
        Student.create({
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            birthday: birthday,
            email: email,
            phone: phone,
            height: height
        })
        .then((newStudent) => {
            View.displayData(newStudent.dataValues)
        })
        .catch((err) => {
            View.displayError(err.message)
        })
    }

    static phoneFormat() {
        Student.findAll({
            raw: true
        })
        .then((data) => {
            data.forEach(dataPhone => {
                View.displayData(Model.Student.prototype.phoneFormat(dataPhone.phone))
            })
        })
        .catch((err) => {
            View.displayError(err)
        })
    }
}

module.exports = Controller