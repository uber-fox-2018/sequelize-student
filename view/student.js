class View {

    static successMessage(){
        console.log('success')
    }

    static errorMessage(){
        console.log('error');
    }

    static read(data){
        console.log(data);
    }

    static error(){
        console.log(`data not found`);
    }

}

module.exports = View