const ControllerStudent = require('./controllers')
const argv = process.argv.slice(2)
const command = argv[0]

if(command == 'Fullname') {
    ControllerStudent.getFullName()
}else if (command == 'Age') {
    ControllerStudent.getAge()
}else if (command == 'Female') {
    ControllerStudent.getGender(argv[0])
}else if (command == 'create') {
    let firstName = argv[1]
    let lastName = argv[2]
    let gender = argv[3]
    let birtday = argv[4]
    let email = argv[5]
    let phone = argv[6]
    let Height = argv[7]
    ControllerStudent.create(firstName, lastName, gender, birtday, email, phone, Height)
} else if (command == 'PhoneFormat'){
    ControllerStudent.PhoneFormat()
}

module.exports = ControllerStudent;