'use strict'

var expect = require('chai').expect;
var pomParsley = require('../index.js');

describe('#pomParsley', function() {
  it('should take in some text and spit out an object', function() {
    let pomsheet = '1/2/2014\n 10 Did something super cool X';
    let result = pomParsley(pomsheet);
    expect(typeof result).to.equal('object');
  });
  it('should not be a really terrible piece of software');
})