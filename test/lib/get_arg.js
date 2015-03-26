var getArg = require('../../lib/get_arg');
var assert = require('assert');

describe('get_arg', function(){
  var args = {};

  beforeEach(function(){
    args = {
      key: 'value',
      foo: 'bar'
    }
  });

  it('returns named value if it exists', function(){
    var returned = getArg('key', 'nope', args);
    assert.equal(returned, 'value');
  });

  it('returns named value if it exists', function(){
    var returned = getArg('no-key', 'nope', args);
    assert.equal(returned, 'nope');
  });

})
