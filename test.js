const Model = require('./models')
const View  = require('./view')



Model.Student.findAll({
    raw:true,
    attributes:['first_name', 'last_name']
})
    .then( test => {
        test.getFullName(test[0].first_name, test[0].last_name)
    })