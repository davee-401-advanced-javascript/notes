'use strict';

const NotesCollection = require('./model/notes-collection.js');

class Notes {
  constructor(obj) {
    this.command = obj.action;
    this.payload = obj.payload;
    this.category = obj.category;
  }

  async execute() {
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
      let collection = new NotesCollection();
      let addedNote = await collection.post(note);
      console.log(`NOTE SAVED: ${addedNote.text}`);
    } catch (e) {
      console.error(e);
    }
  }

  async list() {
    try {
      let collection = new NotesCollection();
      let list = await collection.get(this.payload);
      await list.forEach(item => {
        console.log(item.text);
        console.log(`Category: ${item.category} ID: ${item._id}`);
        console.log('-------------------------------------');
      });
    } catch (e) {
      console.error(e);
    }
  }

  async delete() {
    try {
      let collection = new NotesCollection();
      let deletedNote = await collection.delete(this.payload);
      console.log(`Deleted Note: ${deletedNote._id}`);
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = Notes;
