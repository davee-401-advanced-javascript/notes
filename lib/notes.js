'use strict';

require('dotenv').config();
const uuid = require('uuid');
const mongoose = require('mongoose');
const NotesData = require('./model/notes-schema.js');

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class Notes {
  constructor(obj) {
    this.command = obj.action;
    this.payload = obj.payload;
  }

  execute() {
    if (this.command === 'add') {
      return this.add();
    }
    if (this.command === 'delete') {
      return this.delete();
    }
    if (this.command === 'list') {
      return this.list();
    }
  }

  add() {
    // let addObj = {
    //   noteID: uuid.v4(),
    //   noteText: this.payload,
    // };
    console.log(`Adding Note: ${this.payload}`);
  }

  delete() {
    console.log(`Delete Note: ${this.payload}`);
  }

  list() {
    console.log(`List Note: ${this.payload}`);
  }
}

module.exports = Notes;
