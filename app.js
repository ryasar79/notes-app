console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes')

const res = notes.add(1, 2005)
console.log(res);


// const user = os.userInfo()

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}\n`, function (err) {
//     if (err) {
//         console.error(err);
//     }
// })