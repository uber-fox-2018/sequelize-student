let Controller = require('./controller')

let argv = process.argv
let menu = argv[2]


if(menu === 'fullname'){
    let first_name = argv[3]
    let last_name = argv[4]
    Controller.c_fullName(first_name,last_name)
} else if(menu === 'age'){
    let birthday = argv[3]
    Controller.c_age(birthday)
} else if(menu === 'getFemale'){
    Controller.c_getFemale() 
}