'use strict';

jest.mock('minimist');
const minimist = require('minimist');

const Notes = require('../lib/notes.js');


describe('Notes library', () => {

  it('Proof of Life Test', () => {
    expect(true).toBeTruthy();
  });

});