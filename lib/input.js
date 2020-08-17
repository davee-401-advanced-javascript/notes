'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    // console.log('args from input.js: ', args);
    this.action = this.getAction(args);
    this.payload = this.getPayload(args);
    this.isCategory = this.isCategory(args);
    this.category = Object.values(args)[2];
  }

  getAction(args = {}) {
    let key = Object.keys(args)[1];
    
    const validCommands = {
      add: 'add',
      a: 'add',
      list: 'list',
      l: 'list',
      delete: 'delete',
      d: 'delete',
    };

    return (validCommands[key]) ? validCommands[key] : console.error('Error: Command is not Valid');
  }

  getPayload(args = {}) {
    // minimist will give the value of true when there's no value
    let value = Object.values(args)[1];
    return (value !== true || this.action === 'list') ? value : console.error('Error: No input given after command');
  }

  isCategory(args = {}) {
    let word = Object.keys(args)[2];
    return (word === 'category' || word === 'c') ? 'category' : undefined;
  }

  valid() {
    return !!(this.action && this.payload);
  }
}

module.exports = Input;
