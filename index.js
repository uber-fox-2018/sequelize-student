let command = process.argv[2]
let input = process.argv.slice(2)
let Control = require('./control/control.js')
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


switch (command) {
    case "fullName":
        Control.fullName()
        break;
    case "getAge":
        Control.age()
        break;
    case "getFemale":
        Control.getFemale()
        break;
    case "create":
    rl.question('first name: ', (first_name) => {
        rl.question('last name: ', (last_name) => {
            rl.question('gender: ',(gender) =>{
                rl.question('birthday(yyyy-mm-dd): ',(birthday) =>{
                    rl.question('email: ',(email) =>{
                        rl.question('phone: ',(phone) =>{
                            rl.question('height',(height)=>{
                                Control.create(first_name,last_name,gender,birthday,email,phone,height)
                                rl.close();
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