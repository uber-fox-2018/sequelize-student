const readline = require('readline');

const StudentController = require('./controllers/student_controller')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const student = new StudentController()
const commands = process.argv.slice(2)

switch (commands[0]) {
    case 'student': {
        switch (commands[1]) {
            case 'list':
                student.list();
                break;
            case 'list:female':
                student.femaleOnly();
                break;
            case 'list:male':
                student.maleOnly();
                break;
            case 'register': {
                rl.question('First name: ', first_name => {
                    rl.question('Last name: ', last_name => {
                        rl.question('Gender: ', gender => {
                            rl.question('Height (cm): ', height => {
                                rl.question('Birthday (yyyy-mm-dd): ', birthday => {
                                    rl.question('eMail: ', email => {
                                        rl.question('Phone: ', phone => {
                                            student.register(first_name, last_name, gender, height, birthday, email, phone)
                                            rl.close()
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            } break;
            default:
                student.help();
                break;
        }
    } break;
    default:
        student.help();
        break;
}



