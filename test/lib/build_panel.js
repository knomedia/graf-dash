var buildPanel = require('../../lib/build_panel');
var assert = require('assert');

describe('build_panel', function(){
  var panel;
  beforeEach(function(){
    panel = {
      title: 'Test Panel',
      targets: [
        {target: 'one.two.three'},
        {target: 'four.five.six'}
      ]
    }
  });

  it('applies panel title', function(){
    var result = buildPanel(3, panel);
    assert.equal(result.title, 'Test Panel');
  });

  it('applies targets', function(){
    var result = buildPanel(3, panel);
    assert.deepEqual(result.targets, panel.targets);
  });

  it('applies span', function(){
    var result = buildPanel(3, panel);
    assert(result.span, 3);
  });

  it('applies any extra keys on panel props', function(){
    var aliasColors = {
      'one': 'one',
      'two': 'two'
    }
    panel.aliasColors = aliasColors;
    var result = buildPanel(3, panel);
    assert.deepEqual(result.aliasColors, aliasColors);
  });

});
