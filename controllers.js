const Model = require('./models')

class ControllerStudent {

    static getFullName () {
        Model.Student.findAll({raw: true})
        .then((result) => {
            result.forEach(data => {
                console.log(`[ FullName : ${Model.Student.prototype.getFullName(data)} ]`);
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    static getAge () {
        Model.Student.findAll({raw: true})
        .then((result) => {
            result.forEach(data => {
                console.log(Model.Student.prototype.getAge(data));
            });
            
        }).catch((err) => {
            console.log(err);
        });
    }

    static getGender (gender) {
        Model.Student.getGender(gender, data => {
            for (let i = 0; i < data.length; i++) {
                let name = Model.Student.prototype.getFullName(data[i])
                let obj = {
                    id: data[i].id,
                    fullName: name,
                    firstName: data[i].firstName,
                    lastName: data[i].lastName
                }
                console.log(obj); 
            } 
        })
    }

    static create (firstName, lastName, gender, birtday, email, phone, Height) {
        Model.Student.create({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            birtday: birtday,
            email: email,
            phone: phone,
            Height: Height
        })
        .then((result) => {
            console.log(result.dataValues);
        }).catch((err) => {
            console.log(err.message);
            
        });
    }

    static PhoneFormat () {
        Model.Student.findAll({raw: true})
        .then((result) => {
            result.forEach(data => {
                console.log(Model.Student.prototype.formatPhone(data.phone));
                // console.log(Array.from(data.phone));    
            });
        }).catch((err) => {
            console.log(err);
            
        });
    }
}

module.exports = ControllerStudent