const command = process.argv[2];
const input = process.argv.slice(3);
const Student = require('./controllers/student')

switch (command){
  case 'showAll': Student.showAll();
  break;
  case 'showOnlyFemale': Student.showAllFemale();
  break;
  case 'add': Student.insert();
  break;
}