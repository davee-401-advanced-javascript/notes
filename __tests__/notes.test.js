'use strict';

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
    valid.execute();
    expect(console.log).toHaveBeenCalled();
  });

});