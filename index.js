'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
console.log('input: ', input);

if (input.valid()) {
  const note = new Notes(input);
  note.execute();
} else {
  process.exit(9);
}

// mongoose.disconnect();
// mongoose.connection.close();