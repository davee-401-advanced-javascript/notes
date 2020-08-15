'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    // console.log('args from input.js: ', args);
    this.action = this.getAction(args);
    this.payload = this.getPayload(args);
  }

  getAction(args = {}) {
    let keys = Object.keys(args)[1];

    let validCommands = {
      add: 'add',
      a: 'add',
      list: 'list', 
      l: 'list',
      delete: 'delete',
      d: 'delete',
    };

    if (validCommands[keys]) {
      return validCommands[keys];
    } else {
      console.error('Error: Command is not Valid');
    }
  }

  getPayload(args = {}) {
    // minimist will give the value of true when there's no value
    let value = Object.values(args)[1];
    if (value !== true || this.action === 'list') {
      return value;
    } else {
      console.error('Error: No input given after command');
    }
  }

  valid() {
    return !!(this.action && this.payload);
  }
}

module.exports = Input;

