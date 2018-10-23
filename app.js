const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
const notes = require("./notes");

const argv = yargs.argv;

const command = argv._[0];

if (command === "add") {
  const note = notes.addNote(argv.title, argv.body);
  if (typeof note === "undefined") {
    console.log("The note was not saved, maybe it's a duplicate");
  } else {
    console.log("Note Created");
    notes.logNote(note);
  }
} else if (command === "list") {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s):`);
  allNotes.forEach(note => {
    notes.logNote(note);
  });
} else if (command === "read") {
  const note = notes.read(argv.title);
  if (note) {
    console.log("Note Found");
    notes.logNote(note);
  } else {
    console.log(`Note ${argv.title} not found`);
  }
} else if (command === "remove") {
  const title = argv.title;
  const message = notes.remove(title)
    ? `Note ${title} succesfully removed.`
    : `Note ${title} did not exist.`;
  console.log(message);
} else {
  console.error("Command not recognized");
}
