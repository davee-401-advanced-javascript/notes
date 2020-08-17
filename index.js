'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const convertedInput = new Input();

if (convertedInput.valid()) {
  const note = new Notes(convertedInput);
  note.execute();
}