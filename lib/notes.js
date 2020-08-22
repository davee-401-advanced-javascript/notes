'use strict';

const mongoose = require('mongoose');
const NotesCollection = require('./model/notes-collection.js');

class Notes {
  constructor(obj) {
    this.command = obj.action;
    this.payload = obj.payload;
    this.category = obj.category;
  }

  execute() {
    if (this.command === 'add') {
      return this.add();
    }
    if (this.command === 'list') {
      return this.list();
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
      let addingNote = new NotesCollection();
      let addedNote = await addingNote.post(note);
      console.log(`NOTE SAVED: ${addedNote.text}`);
      mongoose.disconnect();
    } catch (e) {
      console.error(e);
    }
  }

  async list() {
    try {
      let listNotes = new NotesCollection();
      let list = await listNotes.get(this.payload);
      list.forEach(item => {
        console.log(item.text);
        console.log(`Category: ${item.category} ID: ${item._id}`);
        console.log('-------------------------------------');
      });
      mongoose.disconnect();
    } catch (e) {
      console.error(e);
    }
  }

  // async delete() {
  //   try {
  //     await NotesData.findByIdAndRemove(this.payload);
  //     console.log(`Deleted Note: ${this.payload}`);
  //     mongoose.disconnect();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  async delete() {
    try {
      // await NotesData.findByIdAndRemove(this.payload);
      // console.log(`Deleted Note: ${this.payload}`);

      await NotesCollection.delete(this.payload);
      console.log(`Deleted Note: ${this.payload}`);
      mongoose.disconnect();
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = Notes;
