const argv = process.argv
const command = argv[2]

const Controller = require('./controllers/controller')

if (command == 'findById') {
    let id = argv[3]
    Controller.findById(id)
} else if (command == 'findAll') {
    Controller.findAll()
} else if (command == 'getFullName') {
    let id = argv[3]
    Controller.getFullName(id)
} else if (command == 'getAge') {
    let id = argv[3]
    Controller.getAge(id)
} else if (command == 'getFemaleStudent') {
    Controller.getFemaleStudent()
} else if (command == 'create') {
    let first_name = argv[3]
    let last_name = argv[4]
    let gender = argv[5]
    let birthday = argv[6]
    let email = argv[7]
    let phone = argv[8]
    let height = argv[9]
    Controller.create(first_name, last_name, gender, birthday, email, phone, height)
} else if(command == 'phoneFormat') {
    Controller.phoneFormat()
}