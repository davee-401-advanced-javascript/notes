'use strict';

const schema = require('./notes-schema.js');

class NotesCollection {
  constructor() {

  }

  post(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }
}

module.exports = NotesCollection;