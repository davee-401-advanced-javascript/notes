'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const convertedInput = new Input();

// console.log('convertedInput.valid(): ', convertedInput.valid());

if (convertedInput.valid()) {
  const note = new Notes(convertedInput);
  const output = note.execute();
  console.log(output);
}