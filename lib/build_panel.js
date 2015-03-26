function getExtraKeys(keys) {
  return keys.filter(function(k){return (k !== 'title' && k !== 'targets') });
}

module.exports = function buildPanel(span, panel) {
  var builtPanel = {
    title: panel.title,
    type: 'graph',
    span: span,
    fill: 1,
    lineWidth: 2,
    targets: panel.targets,
    tooltip: {
      shared: true
    },
    nullPointMode: 'null as zero'
  }
  var extraKeys = getExtraKeys(Object.keys(panel));
  extraKeys.forEach(function(key) {
    builtPanel[key] = panel[key];
  });
  return builtPanel;
}

