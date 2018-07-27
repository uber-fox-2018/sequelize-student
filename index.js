const Model = require('./models');
const argv = process.argv.slice(2)
const Controller = require('./Controller.js');

class Routes {
    constructor(input) {
        this.input = input
        this.route()
    }

    route() {
        let cmd = this.input[0]
        let ctr = new Controller(this.input)
        switch (cmd) {
            case 'help':
                ctr.help()
                break;

            case 'student':
                if(this.input[0] == 'student' && this.input[1] == 'create') {
                    ctr.create()
                } else if(this.input[0] == 'student' && this.input[1] == 'findAll') {
                    ctr.findAll()
                }
                
                break;
        
            default:
                ctr.help()
                break;
        }
    }
}

new Routes(argv)