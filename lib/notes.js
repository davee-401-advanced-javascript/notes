'use strict';

class Notes {
  constructor(obj) {
    this.command = obj.action;
    this.payload = obj.payload;
  }

  execute() {
    if (this.command === undefined) {
      return 'Error: Command not Valid';
    }
    if (this.payload === undefined) {
      return 'Error: Description not entered';
    }
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
