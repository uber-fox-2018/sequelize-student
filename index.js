const Model = require('./models/');

//Release 2 Instance Method No.1
// Model.Student.findAll()
// .then(studentsData => {
//     studentsData.forEach(student => {
//         console.log(`Full name:`, student.getFullName());
//     })
// })
// .catch(err => {
//     console.log(err);
// })

// //Release 2 Instance Method No.2
// Model.Student.findAll()
// .then(studentsAge => {
//     studentsAge.forEach(age => {
//         console.log(`Student age:`, age.getAge());
//     })
// })

// //Release 2 Class Method No.1
// var all = Model.Student.getFemaleStudent()
// .then(femaleStudents => {
//     femaleStudents.forEach(femaleStudent => {
//         console.log(`id:`, femaleStudent.id);
//         console.log(`first_name:`, femaleStudent.first_name);
//         console.log(`last_name:`, femaleStudent.last_name);
//         console.log(`full_name:`, femaleStudent.getFullName());
//         console.log(`birthday:`, femaleStudent.birthday);
//         console.log(`age:`, femaleStudent.age);
//         console.log(`===========================`);
//     })
// })
// .catch(err => {
//     console.log(err);
// })

//Release 3 & 4
// Model.Student.create({
//     first_name: "Billy",
//     last_name: "Bomber",
//     gender: "male",
//     birthday: "1993-09-20",
//     email: "bibob@mail.com",
//     phone: "1234567890123",
//     email2: "billbom@mail.com",
//     height: 170,
//     phone2: "1234567894321"
// })
// .then(() => {
//     console.log(`Data inserted!`);
// })
// .catch(err => {
//     console.log(err);
// })


// validation phone number view
Model.Student.findAll()
.then(studentsData => {
    studentsData.forEach(student => {
        console.log(student.phoneView());
    })
})
.catch(err => {
    console.log(err);
})