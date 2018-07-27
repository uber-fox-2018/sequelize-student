const controller = require(`./controller.js`)

const argv = process.argv.slice(2)

switch (argv[0]) {
    case `getfullname`:
        controller.getFullName()
        break;
    case `getage`:
        controller.getAge()
        break;
    case `getfemalestudents`:
        controller.getFemaleStudents()
        break;
    case `insertdata`:
        controller.insertdata(argv[1],argv[2],argv[3],argv[4],argv[5],argv[6],argv[7],)
        break;

    default:
        break;
}