'use strict';

// require('dotenv').config();
// const mongoose = require('mongoose');
// const MONGODB_URI = process.env.MONGODB_URI;
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

require('@code-fellows/supergoose');

const Notes = require('../lib/notes.js');

describe('Notes library', () => {
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(global.console, 'log');
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('Proof of Life Test', () => {
    expect(true).toBeTruthy();
  });

  it('Should NOT console.log message if inputs are bad', () => {
    const fakeInput = { action: undefined, payload: 'should not work' };
    const notValid = new Notes(fakeInput);
    notValid.execute();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('Should console.log message if inputs are valid', () => {
    const fakeInput = {action: 'add', payload: 'add should work'};
    const valid = new Notes(fakeInput);
    // console.log('this is valid: ', valid);
    valid.execute();
    expect(console.log).toHaveBeenCalled();
  });

});

describe('Notes Collection', () => {
  it('Can add note to database', () => {
    let obj = {
      text: 'testing add',
      category: 'first',
    };


  });
});