'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    // console.log('args from input.js: ', args);
    this.action = this.getAction(args);
    this.payload = this.getPayload(args);
    this.category = this.getCategory(args);
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
    let value = Object.values(args)[1];
    return (typeof value === 'string') ? value : console.error('Error: No input given after command');
  }

  getCategory(args = {}) {
    let category = args.c || args.category;
    if (!category){return undefined;}
    if (category === true) {return undefined;}
    return category;
  }

  valid() {
    if (!this.action) {return false;}
    if (this.action === 'add' && (!this.payload)) {return false;}
    if (this.action === 'delete' && (!this.payload)) {return false;}
    return true;
  }
}

module.exports = Input;
