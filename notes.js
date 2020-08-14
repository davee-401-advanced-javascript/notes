'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const convertedInput = new Input();
const note = new Notes(convertedInput);
const output = note.execute();

console.log(output);
