class StudentView {
    constructor() { }

    static displayOne(student) {
        let obj = { 
            full_name: student.getFullName(),
            gender: student.gender,
            birthday: student.birthday,
            age: student.getAge(),
            email: student.email,
            phone: student.phone
        };
        console.log(obj);
    }

    static displayList(students) {
        console.clear()
        students.forEach(student => {
            this.displayOne(student)
        })
    }

    static displayAddSuccess(newStudent) {
        console.clear()
        console.log(`Successfully added new student.`)
        this.displayOne(newStudent);
    }

    static displayDeleteSuccess(id) {
        console.clear()
        console.log(`Successfully deleted student with id: ${id}`)
    }

    static displayDataNotFound() {
        console.clear()
        console.log(`Data nof found.`)
    }

    static displayError(err) {
        console.clear()
        console.log(`Oops. Something went wrong.`, err)
    }

    static displayValidations(errors) {
        console.clear()
        console.log(`Invalid input:`)
        errors.forEach(err => {
            console.log(err.message)
        })
    }

    static displayHelp() {
        console.log(`$ node index.js list #display all students`)
        console.log(`$ node index.js list:male #display only male students`)
        console.log(`$ node index.js list:female #display only male students`)
        console.log(`$ node index.js register #register new student`)
    }
}

module.exports = StudentView;