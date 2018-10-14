console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

const user = os.userInfo()

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}\n`, function (err) {
    if (err) {
        console.error(err);
    }
})