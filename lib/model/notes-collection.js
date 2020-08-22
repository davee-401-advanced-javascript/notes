'use strict';

const schema = require('./notes-schema.js');

class NotesCollection {
  constructor() {

  }

  get(description) {
    return description ? schema.find({category: description}) : schema.find({});
  }

  post(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

  delete(id) {
    return schema.findByIdAndRemove(id);
  }
}

module.exports = NotesCollection;