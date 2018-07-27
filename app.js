const ControllerStudent = require('./controller/student');
const args = process.argv.slice(2)
const command = args[0]
const input1 = args[1]
const input2 = args[2]
const input3 = args[3]
const input4 = args[4]
const input5 = args[5]
const input6 = args[6]
const input7 = args[7]


if(command === 'add' && input1 !== undefined && input2 !== undefined && input3 !== undefined && input4 !== undefined && input5 !== undefined && input6 !== undefined && input7 !== undefined ){
    ControllerStudent.addStudent(input1,input2,input3,input4,input5,input6,input7)
}else if(command === 'getFullName'){
    ControllerStudent.getFullName()
}else if(command === 'getFemaleStudents'){
    ControllerStudent.getFemaleStudent()
}else if(command === 'getAge'){
    ControllerStudent.getAge()
}