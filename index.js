const argv = process.argv
let command = argv[2]
var controller = require('./controller/controller')

switch (command) {
    case 'getFullname':
        controller.getFullName(argv[3])
        break;

    case 'getAge':
        controller.getAge(argv[3])
        break;


    case 'getFemale' : 
        controller.getFemale()
        break;
    

    case 'add' :
        let obj = {
            first_name : argv[3],
            last_name : argv[4],
            gender : argv[5],
            birthday : argv[6],
            email : argv[7],
            phone : argv[8],
            height : argv[9]
        }
        controller.add(obj)
        break;

    case 'getPhone' : 
        var id = argv[3]
        controller.getPhone(id)
        break;
    default:


        break;
}