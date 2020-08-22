'use strict';

const schema = require('./notes-schema.js');

class NotesCollection {
  constructor() {

  }

  get(description) {
    if (description) {
      return schema.find({ category: description });
    } else {
      return schema.find({});
    }
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