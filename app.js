console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes')

console.log(_.isString(true));
console.log(_.isString('Kevin'));
console.log(_.isString(2));
console.log(_.isString(3.5));

const filteredArray = _.uniq([1, 2, 3, 4, 5, 1, 23, 'Kevin', 5, 4, 65, 2, 'Kevin', 'kevin'])
console.log(filteredArray);





// const user = os.userInfo()

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}\n`, function (err) {
//     if (err) {
//         console.error(err);
//     }
// })