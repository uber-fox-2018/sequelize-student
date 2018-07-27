const Models = require('./models/index')
const view = require(`./view.js`)

const student = new Models.student

class Controller {
    
    static getFullName() {
        Models.student.prototype.getFullName = () => {
            Models.student.findAll({
            }).then(students => {
                for(let student of students) {
                    view.display(student.firstName + ` ` +student.lastName);
                }
                
            })
        }
        student.getFullName()
    }
    static getAge() {
        Models.student.prototype.getAge = () => {
            Models.student.findAll()
            .then(students => {
                for(let student of students) {
                    let obj = {
                        name:student.firstName,
                        age:2018 - student.birthday.split('-')[0] 
                    }
                    view.display(obj)
                }
            })   
        }
        student.getAge()
    }
    static getFemaleStudents() {
        Models.student.findAll({
            where: {gender : `Female`}
            }).then(students => {
                for(let student of students) {
                    let obj = {
                        id:student.id,
                        firstName:student.firstName,
                        lastName:student.lastName,
                        fullName:student.firstName + ` ` +student.lastName
                    }
                    view.display(obj)
                }
            })
    }
    static insertdata(firstName, lastName, gender, birthday, email, phone, tinggiBadan) {
        Models.student.create({ firstName: firstName, lastName:lastName, gender:gender, birthday:birthday, email:email, phone:phone, tinggiBadan:tinggiBadan })
        .then( data => {
            console.log(data.get({plain:true}));
        })
        .catch(data => {
            console.log(data.errors[0].message);
        })
    }
}


module.exports = Controller