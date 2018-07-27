const Model = require('./models')

// instance method
let students = new Model.Student

Model.Student.prototype.fullName = () => {
    Model.Student.findAll()
    .then( student => {
        let result = []
        for(let i = 0; i < student.length; i++){
           result.push(`${student[i].first_name} ${student[i].last_name}`)
        }
        console.log(result)
    })
}

// students.fullName()

Model.Student.prototype.ageStudent = () => {
    Model.Student.findAll({
        raw:true
    })
    .then( student => {
       
        let result = []
        for(let i = 0; i < student.length; i++){
           let studentName = student[i].first_name
           let currentYear = 2018 
           let studentBirthday = Number(student[i].birthday.slice(0,4))
           let temp = studentName + ' ' + (currentYear - studentBirthday) + ' tahun'
           result.push(temp)
        }
        console.log(result)
    })
}

// students.ageStudent()


// Class Method
Model.Student.getFemaleStudent =  ()  => {
    Model.Student.findAll({
        raw:true
    })
    .then( student => {
        let result = []
        for(let i = 0; i < student.length; i++){
           let firstName = student[i].first_name
           let lastName = student[i].last_name
           let fullName  = student[i].first_name + ' ' + student[i].last_name
           let temp      = `first name : ${firstName}, last name : ${lastName}, fullName : ${fullName}`
           result.push(temp)
        }
        console.log(result)
    })
}

Model.Student.getFemaleStudent()
