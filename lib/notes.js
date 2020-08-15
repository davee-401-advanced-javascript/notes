'use strict';

const uniqid = require('uniqid');

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
      noteID: uniqid(),
      noteText: this.payload,
    };
    // console.log('addobj:', addObj);
    return `Adding Note: ${this.payload}`;
  }

  delete() {
    return `Delete Note: ${this.payload}`;
  }

  list() {
    return `List Note: ${this.payload}`;
  }
}

module.exports = Notes;
