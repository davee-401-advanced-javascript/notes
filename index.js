'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();

if (input.valid()) {
  const note = new Notes(input);
  note.execute();
} 
process.exit();