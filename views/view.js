const cTable = require('console.table');

class View {
  static message (text){
    console.log(text)
  }

  static table (obj){
    console.table(obj)
  }
}

module.exports = View;