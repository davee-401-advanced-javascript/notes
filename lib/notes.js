'use strict';

const uuid = require('uuid');
const mongoose = require('mongoose');
const NotesData = require('./model/notes-schema.js');

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);

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
    let addObj = {
      noteID: uuid.v4(),
      noteText: this.payload,
    };
    // return `Adding Note: ${this.payload}`;
    console.log(`Adding Note: ${this.payload}`);
  }

  delete() {
    // return `Delete Note: ${this.payload}`;
    console.log(`Delete Note: ${this.payload}`);
  }

  list() {
    // return `List Note: ${this.payload}`;
    console.log(`List Note: ${this.payload}`);
  }
}

module.exports = Notes;
