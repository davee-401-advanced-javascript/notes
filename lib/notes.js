'use strict';

let Notes = function (obj) {
  this.command = obj.action;
  this.payload = obj.payload;
};

Notes.prototype.execute = function () {
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
};

Notes.prototype.add = function () {
  return `Adding Note: ${this.payload}`;
};

Notes.prototype.delete = function () {
  return `Delete Note: ${this.payload}`;
};

Notes.prototype.list = function () {
  return `List Note: ${this.payload}`;
};

module.exports = Notes;
