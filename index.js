const Controller = require('./controller/controller');
const argv = process.argv.slice(2);

let command = argv[0];

switch(command) {
  case 'getFullName': {
    Controller.getFullName();
    break;
  }

  case 'getAge': {
    Controller.getAge();
    break;
  }

  case 'getFemale': {
    Controller.getFemaleStudent();
    break;
  }

  case 'getPhone': {
    Controller.getPhone();
    break;
  }

  case 'add': {
    let studentData = {
      first_name: argv[1],
      last_name: argv[2],
      gender: argv[3],
      birthday: argv[4],
      email: argv[5],
      phone: argv[6], 
    };
    Controller.add(studentData);
    break;
  }

  case 'update': {
    let studentData = {
      id: argv[1],
      first_name: argv[2],
      last_name: argv[3],
      gender: argv[4],
      birthday: argv[5],
      email: argv[6],
      phone: argv[7], 
    };
    Controller.update(studentData);
    break;
  }

  case 'delete': {
    let id = argv[1];
    Controller.delete(id);
    break;
  }

  default: {
    Controller.help();
    break;
  }

}