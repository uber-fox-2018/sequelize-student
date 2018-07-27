const [ command, ...args ] = process.argv.slice(2)
const controllerStudent = require('./controller/student')

switch(command) {
  case 'add': {
    controllerStudent.add(...args)
    break
  }
  case 'getFullName': {
    controllerStudent.getFullName()
    break
  }
  case 'getAge': {
    controllerStudent.getAge()
    break
  }
  case 'getFemaleStudent': {
    controllerStudent.getFemaleStudent(...args)
    break
  }
  case 'getPhoneNumber': {
    controllerStudent.getPhoneNumber()
    break
  }
  case 'getAllData': {
    controllerStudent.getAllData()
    break
  }

}