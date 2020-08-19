'use strict';

const mongoose = require('mongoose');
const NotesData = require('./model/notes-schema.js');

class Notes {
  constructor(obj) {
    this.command = obj.action;
    this.payload = obj.payload;
    this.isCategory = obj.isCategory;
    this.category = obj.category;
  }

  execute() {
    if (this.command === 'add') {
      return this.add();
    }
    if (this.command === 'list' && this.payload === true) {
      return this.listAll();
    }
    if (this.command === 'list') {
      return this.listByCategory();
    }
    if (this.command === 'delete') {
      return this.delete();
    }
  }

  async add() {
    try {
      let note = {
        text: this.payload,
        category: this.category || 'General',
      };
      let addingNote = new NotesData(note);
      let addedNote = await addingNote.save();
      console.log(`NOTE SAVED: ${addedNote.text}`);
      mongoose.disconnect();
    } catch (e) {
      console.error(e);
    }
  }

  async listAll() {
    try {
      let list = await NotesData.find({});
      this.renderlist(list);
    } catch (e) {
      console.error(e);
    }
  }

  async listByCategory() {
    try {
      let list = await NotesData.find({ category: this.payload });
      this.renderlist(list);
    } catch (e) {
      console.error(e);
    }
  }

  renderlist(arr) {
    arr.forEach(item => {
      console.log(item.text);
      console.log(`Category: ${item.category} ID: ${item._id}`);
      console.log('-------------------------------------');
    });
    mongoose.disconnect();
  }

  delete() {
    console.log(`Delete Note: ${this.payload}`);
    mongoose.disconnect();
  }
}

module.exports = Notes;
