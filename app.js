let Model = require("./models");

// Model.Student.create({
//   firstName: "ade",
//   lastName: "fahri",
//   gender: "laki",
//   birthday: "1993-11-23",
//   email: "arigswaaaasfsfdasgg@hsds.com",
//   phone: "1234567890451",
//   height: 160
// })
//   .then(data => {
//     console.log(data.dataValues);
//   })
//   .catch(err => {
//     console.log(err);
//   });

Model.Student.findAll()

  .then(dataStudents => {
    dataStudents.forEach(student => {
      // console.log(student.findFullName());
      console.log(student.formatPhone());
    });
  })
  .catch(err => {
    console.log(err);
  });

// Model.Student.findAll()

//   .then(dataStudents => {
//     dataStudents.forEach(student => {
//       console.log(student.getAge());
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Model.Student.findGender("female", student => {
//   // findGender.forE/ach(found=>)
//   for (let i = 0; i < student.length; i++) {
//     console.log(`***************************`);
//     console.log(student[i].id);
//     console.log(student[i].firstName);
//     console.log(student[i].lastName);
//     console.log(student[i].findFullName());
//     console.log(student[i].gender);
//     console.log(student[i].birthday);
//     console.log(student[i].getAge());

//     console.log(`***************************`);

//     // const element =Î array[i];
//   }
// });
