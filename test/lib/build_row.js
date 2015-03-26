var buildRow = require('../../lib/build_row');
var assert = require('assert');

describe('build_row', function(){

  var panels;
  beforeEach(function(){
    panels = [
      {title: '1st Panel', targets:[{target: 'one.two.three'}]},
      {title: '2nd Panel', targets:[{target: 'four.five.six'}]}
    ];
  });

  it('assigns title to the row', function(){
    var results = buildRow('Test Row', panels);
    assert.equal(results.title, 'Test Row');
  });

  it('builds a panel for each panel passed in', function(){
    var results = buildRow('Test Row', panels);
    assert.equal(results.panels.length, 2);
  });

  it('panels have correct span', function(){
    panels.push({title: '3nd Panel', targets:[{target: 'four.five.six'}]});
    var results = buildRow('Test Row', panels);
    var span = results.panels[0].span;
    assert.equal(span, 4);
  });

});
