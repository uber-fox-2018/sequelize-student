const Student = require("./studentController.js");



const [command, ...args] = process.argv.slice(2);
switch(command){
    case "addStudent":
        Student.add(...args);
        break;
    case "getAllName":
        Student.getAllName();;
        break;
    case "getAllAge":
        Student.getAllAge();
        break;
    case "getAllFemale":
        Student.getAllFemaleStudent();
        break;
    

}