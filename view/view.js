class View {
    static displayFullName(data){
        console.log(data)
    }

    static displayAge(data){
        console.log(data)
    }

    static displayFemale(data, fullName, age){
        let obj = {
            first_name : data.first_name,
            last_name : data.last_name,
            full_name : fullName,
            gender : data.gender,
            age : age
        }
        console.log(obj)
    }

    static displayError(data){
        console.log(error)
    }
}

module.exports = View