'use strict';

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation( () => {
  return {
    _ : [],
    add: 'adding a note',
  };
});

const Input = require('../lib/input.js');

describe('input library', () => {

  it('Proof of Life Test', () => {
    expect(true).toBeTruthy();
  });

  it('Given valid inputs the valid() method should return true', () => {
    let validInput = new Input();
    expect(validInput.valid()).toStrictEqual(true);
  });

  it('Input module creates an instance with action property', () => {
    let validInput = new Input();
    expect(validInput.action).toStrictEqual('add');
  });
  
  it('Input module creates an instance with payload property', () => {
    let validInput = new Input();
    expect(validInput.payload).toStrictEqual('adding a note');
  });

  it('Given bad command, valid() method should return false', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        bad: 'bad is not a real command',
      };
    });

    let invalidCommand = new Input();
    expect(invalidCommand.valid()).toStrictEqual(false);
  });

  it('If no description is inputed, valid() method should return false', () => {
    minimist.mockImplementation(() => {
      return {
        _: [],
        add: true,
      };
    });

    let noDescription = new Input();
    // console.log('noDescription: ', noDescription);
    expect(noDescription.valid()).toStrictEqual(false);
  });
});
