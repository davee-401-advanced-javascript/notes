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
  } else {
    return undefined;
  }
};

Input.prototype.getPayload = function (args = {}) {
  if (args.add) {
    return args.add;
  }
  if (args.a) {
    return args.a;
  } else {
    return undefined;
  }
};

module.exports = Input;
