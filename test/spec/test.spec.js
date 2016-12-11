/**
 * Created by odedpriva on 11/15/16.
 */
'use strict';

const expect = require('chai').expect;

let func = require('../../src/test.js').self;

describe('this is a simple function test', function() {

  it('should equal double the sent value', function() {

    expect(func(1)).to.equal(16);

  });

});
