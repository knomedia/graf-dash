var buildPanel = require('./build_panel');

module.exports = function(title, panels) {
  var size = 12 / panels.length;
  var panels = panels.map(buildPanel.bind(null, size));
  var row = {
    title: title,
    height: '273px',
    panels: panels
  }
  return row;
}
