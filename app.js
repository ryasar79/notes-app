console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const notes = require('./notes')

const command = process.argv[2]
console.log('Command: ', command)

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} if (command === 'read') {
    console.log('Reading a note');

} else if (command === 'remove') {
    console.log('Removing a note');

} else {
    console.error('Command not recognized');
}

