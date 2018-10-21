console.log("Starting notes.js");

const fs = require('fs');

const addNote =  (title, body) => {
    var notes = [];
    const note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
    }

    var duplicateNotes = notes.filter((note) => {
        return note.title  === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        return note;
    }
};

const getAll = () => {
    console.log('Getting all notes');
};

const read = (title) => {
    console.log(`Reading note with title ${title}`);
};

const remove = (title) => {
    console.log(`Remove note with title ${title}`);
};

module.exports = {
    addNote,
    getAll,
    read,
    remove
};

