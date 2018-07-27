class View {
    static showFullName (fullname){
        console.log(fullname)
    }
    static showError(err){
        console.log(err)
    }
    static showAge(age){
        console.log(age)
    }
    static femaleStudent(data,fullname,age){
        let obj = {
            first_name : data.first_name,
            last_name : data.last_name,
            fullName : fullname,
            gender : data.gender,
            age : age,
        }
        console.log(obj)
    }
    
}

module.exports = View