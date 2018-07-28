const argv = process.argv
const command = argv[2]
const input = argv.slice(3)
const Controller = require('./controllers/controller')
const ControllerStudents = Controller.ControllerStudents

class Application {
    static chooseMenu(command) {
        switch (command) {
            case 'getFemaleStudent':
                ControllerStudents.femaleStudent()
                break;
            case 'getAgeStudent':
                ControllerStudents.ageStudents()
                break;
            case 'getFullName':
                ControllerStudents.fullNameStudent()
                break;
            case 'addStudent':
                let newStudent = {
                    firstName: input[0],
                    lastName: input[1],
                    gender : input[2],
                    birthday: new Date(input[3]),
                    email: input[4],
                    phone : input[5],
                    height : +input[6]
                }
                ControllerStudents.addStudent(newStudent)
                break;
            case 'deleteStudent':
                let id = input[0]
                ControllerStudents.removeStudent(id)
                break;
            case 'getPhoneNumber':
                ControllerStudents.getPhoneNumber()
                break;
            default:
        }
    }
}

Application.chooseMenu(command)