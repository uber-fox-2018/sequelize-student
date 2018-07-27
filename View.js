class View {
    static DisplayStudent(students) {
        // console.clear()
        // students.forEach(student => {
            console.log(students)
        // });
    }

    static DisplayNewRecord(student) {
        console.clear()
        console.log(`Success for create new record (${student.first_name}) with ID: ${student.id}`)
    }
}

module.exports = View;