const table = require('console.table')

class View {
    static displayMessage(msg) {
        console.table(msg);
    }

    static displayErrorMessage(errMsg) {
        console.log(errMsg);
    }
}

module.exports = View