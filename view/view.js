const Table = require('cli-table')
const chalk = require('chalk')

class View {
  static showMessageInsert(data) {
    let table = new Table()

    table.push(
      [
        'ID',
        'First Name', 
        'Last Name', 
        'Gender', 
        'Birthday', 
        'Email', 
        'Phone'
      ],
      [
        data.id,
        data.first_name, 
        data.last_name, 
        data.gender, 
        data.birthday, 
        data.email, 
        data.phone
      ]
    )

    console.log(table.toString())
  }

  static showMessageErr(err) {
    console.log(chalk.red(err.message))
  }

  static showMessage(msg) {
    console.log(msg)
  }

  static showFullName(data) {
    let table = new Table
    table.push(['Fullname'])
    data.map(data => {
      var isi = []
      isi.push(data)
      table.push(isi)
    })
    console.log(table.toString())
  }

  static showStudentAge(data) {
    let table = new Table()
    table.push(['Fullname', 'Age'])
    data.map(student => {
      var list = []
      list.push(student.fullName, student.age)
      table.push(list)
    })
    console.log(table.toString())
  }
}

module.exports = View