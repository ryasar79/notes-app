console.log("Starting notes.js");

const fs = require("fs");

const fetchNotes = () => {
  try {
    var notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    console.error(e);
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  var notes = fetchNotes();
  const note = {
    title,
    body
  };

  var duplicateNotes = notes.filter(note => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log("Getting all notes");
};

const read = title => {
  console.log(`Reading note with title ${title}`);
};

const remove = title => {
  const notes = fetchNotes();
  const remainingNotes = notes.filter(note => {
    return note.title !== title;
  });

  saveNotes(remainingNotes);
  return notes.length !== remainingNotes.length;
};

module.exports = {
  addNote,
  getAll,
  read,
  remove
};
