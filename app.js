const argv = process.argv.slice(2)
const input = argv[0]
const Controller = require('./control/controller.js')
const readline   = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

switch (input) {
    case "fullName":
        Controller.fullName()
        break;
    case "getAge":
        Controller.age()
        break;
    case "getFemale":
        Controller.getFemale()
        break;
    case "addData":
        rl.question('first name : ', (first_name) => {
            rl.question('last name : ', (last_name) => {
                rl.question('gender : ', (gender) => {
                    rl.question('birthday : ', (birthday) => {
                        rl.question('email : ', (email) => {
                            rl.question('phone : ', (phone) => {
                                rl.question('height : ', (height) => {
                                    Controller.addDataStudent(first_name, last_name, gender, birthday, email, phone, height)
                                    rl.close()
                                })
                            })
                        })
                    })
                })
            })
        })
        break;
    default:
        break;
}