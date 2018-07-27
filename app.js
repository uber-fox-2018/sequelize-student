const Model = require('./models')
let student = new Model.student

Model.student.prototype.getFullName = ()=>{
    Model.student.findAll({
        raw:true,
        attributes:['id','first_name','last_name']
    })
    .then(data =>{        
        for(let i = 0 ; i < data.length ; i++){
            console.log(`${data[i].id}. ${data[i].first_name} ${data[i].last_name}`);            
        }
    })
    .catch(err =>{
        console.log(err);
        
    })
}
// student.getFullName()

Model.student.prototype.getAge = ()=>{
    Model.student.findAll({
        raw:true,
        attributes:['id','first_name',['birthday','age']]
    })
    .then(data =>{
        let now = new Date
        for(let i = 0 ; i < data.length ; i++){
            data[i].age = data[i].age.slice(0,4)
            data[i].age = now.getFullYear() - data[i].age
        }
        console.log(data);  
    })
    .catch(err =>{
        console.log(err);
        
    })
}
// student.getAge()

Model.student.getFemaleStudent = () =>{
    Model.student.findAll({
        raw:true,
        where: {gender:'female'},
        attributes:['*']
    })
    .then(data =>{
        console.log(data);
        
    })
    .catch(err =>{
        console.log(err);
        
    })
}

// Model.student.getFemaleStudent()
    

console.log(Model.student.findAll());
