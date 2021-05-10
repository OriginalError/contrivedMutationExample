'use strict';

var assert = require('assert');
var stringFormatter = require('../src/index');

describe('longest word', function() {

  it('should return the longest word', function(done) {
    var sentence = 'Fake people have an image to maintain. Real people just don’t care.';
    stringFormatter.longestWord(sentence);
    done();
  });
  
  it('should return an empty string when an empty string is provided', function(done) {
    var result = stringFormatter.longestWord('');
    assert.strictEqual(result, '');
    done();
  });

  it('should return an empty string for non-string input', function(done) {
    var result = stringFormatter.longestWord(1337);
    assert.strictEqual(result, '');
    done();
  });

  // Slay the mutants

  // it('should return the longest word', function(done) {
  //   var sentence = 'Fake people have an image to maintain. Real people just don’t care.';
  //   var result = stringFormatter.longestWord(sentence);
  //   assert.strictEqual(result, 'maintain');
  //   done();
  // });

  // it('should return the first longest word found', function(done) {
  //   var result = stringFormatter.longestWord('many word with same size');
  //   assert.strictEqual(result, 'many');
  //   done();
  // });

  // it('should return the first word if there is only one word', function(done) {
  //   var result = stringFormatter.longestWord('foo');
  //   assert.strictEqual(result, 'foo');
  //   done();
  // });
});
