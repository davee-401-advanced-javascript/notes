'use strict';

require('dotenv').config();
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

  async add() {
    try {
      let testAdd = {
        text: 'la;ldkfj',
        category: 'test category',
      };
      let testingAdd = new NotesData(testAdd);
      let addedNote = await testingAdd.save();
      mongoose.disconnect();
      console.log('addedNote: ', addedNote);
      console.log(`Adding Note: ${this.payload}`);
    } catch (e) {
      console.error(e);
    }
  }

  async list() {
    try {
      let testList = await NotesData.find({});
      mongoose.disconnect();
      console.log('testList: ', testList);
      console.log(`List Note: ${this.payload}`);
    } catch (e) {
      console.error(e);
    }
  }

  delete() {
    console.log(`Delete Note: ${this.payload}`);
  }
}

module.exports = Notes;



