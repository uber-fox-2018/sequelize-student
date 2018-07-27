class View{
    static list(students){
        console.table(students)
    }
    static listFemale(students){
        students.forEach(student => {
            console.log(`id: ${student.id}`)
            console.log(`first_name: ${student.first_name}`)
            console.log(`last_name: ${student.last_name}`)
            console.log(`full_name: ${student.full_name}`)
            console.log("====================================")
        })
    }
    static error(err){
        console.log(err);
    }
}

module.exports = View;