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
  return fetchNotes();
};

const read = title => {
  const notes = fetchNotes();
  const foundNote = notes.filter(note => {
    return note.title === title;
  });

  return foundNote[0];
};

const remove = title => {
  const notes = fetchNotes();
  const remainingNotes = notes.filter(note => {
    return note.title !== title;
  });

  saveNotes(remainingNotes);
  return notes.length !== remainingNotes.length;
};

const logNote = note => {
  //debugger; `node --inspect-brk   app.js read --title=test23 --body="Empty string"`
  console.log("----");
  console.log(`Title: ${note.title}`);
  console.log(`Body : ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  read,
  remove,
  logNote
};
