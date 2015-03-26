module.exports = function(name, def, args) {
  args = args || ARGS;
  var value = def;
  if (!!args[name]) {
    value = args[name];
  }
  return value;
}
