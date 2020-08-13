'use strict';

const minimist = require('minimist');

let Input = function () {
  const args = minimist(process.argv.slice(2));
  this.action = this.getAction(args);
  this.payload = this.getPayload(args);
};

Input.prototype.getAction = function (args = {}) {
  let keys = Object.keys(args);
  if (keys.includes('add') || keys.includes('a')) {
    return 'add';
  } else if (keys.includes('delete') || keys.includes('d')) {
    return 'delete';
  } else if (keys.includes('list') || keys.includes('l')) {
    return 'list';
  } else {
    return undefined;
  }
};

Input.prototype.getPayload = function (args = {}) {
  let values = Object.values(args)[1];
  if (values === true) {
    return undefined;
  } else {
    return values;
  }
};

module.exports = Input;
