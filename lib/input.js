'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.getAction(args);
    this.payload = this.getPayload(args);
  }

  getAction(args = {}) {
    let keys = Object.keys(args)[1];
    
    let validResponse = {
      add: 'add',
      a: 'add',
      list: 'list', 
      l: 'list',
      delete: 'delete',
      d: 'delete',
    };

    return (validResponse[keys]) ? validResponse[keys] : undefined;
  }

  getPayload(args = {}) {
    let value = Object.values(args)[1];
    // minimist will give the value of true when there's no value
    return (value === true) ? undefined : value;
  }

  valid() {
    return !!(this.action && this.payload);
  }
}

module.exports = Input;


