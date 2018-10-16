console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require("yargs")
const notes = require('./notes')

const argv = yargs.argv

const command = process.argv[2]
console.log('Command: ', command)
console.log('Process: ', process.argv)
console.log('Yargs: ', argv)

if (command === 'add') {
    notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    console.log('Reading a note');

} else if (command === 'remove') {
    console.log('Removing a note');

} else {
    console.error('Command not recognized');
}

