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

    if (validResponse[keys]) {
      return validResponse[keys];
    } else {
      return undefined;
    }

  }

  getPayload(args = {}) {
    let values = Object.values(args)[1];
    return values === true ? undefined : values;
  }

  valid() {
    return !!(this.action && this.payload);
  }
}

module.exports = Input;


