var wrapWith = require('../../lib/wrap_with');
var assert = require('assert');

describe('wrap_with', function(){
  it('wraps with strings', function(){
    var target = 'one.two.three';
    var result = wrapWith(target, 'alias', 'node');
    assert.equal(result, 'alias(one.two.three,"node")');
  });

  it('wraps with numbers', function(){
    var target = 'one.two.three';
    var result = wrapWith(target, 'movingAverage', 5);
    assert.equal(result, 'movingAverage(one.two.three,5)');
  });
});
