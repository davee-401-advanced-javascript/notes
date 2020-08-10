'use strict';

let Notes = function (obj) {
  this.command = obj.action;
  this.payload = obj.payload;
};

Notes.prototype.execute = function () {
  if (this.command === undefined) {
    console.error('command not valid');
    return;
  }
  if (this.payload === undefined) {
    console.error('instructions not entered');
    return;
  }
  if (this.command === 'add') {
    return this.add();
  }
};

Notes.prototype.add = function () {
  return `Adding Note: ${this.payload}`;
};

module.exports = Notes;
