# graf-dash
 > utility methods for building grafana scripted dashboards

## Getting Started

Include this module in your scripted dashboard project

```
npm install --save graf-dash
```

(See
[`grafana_scripted_starter`](https://github.com/knomedia/grafana_scripted_starter)
for baseline project that utilizes CommonJS, npm, and a webpack build for
grafana scripted dashboards)


## API

### Param Args

Grafana scripted dashboards can take param arguments. They will be made
available to the scope of your dashboard via an `ARGS` property.

returns the value of `key` on `args`, or `default` if the key is not found

`getArg(key:string, default:*, args:object)`

```javascript
var getArg = require('graf-dash').getArg;

// passing in the `ARGS` object that grafana makes available
var controllerName = getArg('controller', 'users', ARGS);
```

### Rows

`buildRow(title:string, panels:array)`

Takes a title and an array of panel objects and builds a row of panels


### Panels

`buildPanel(span:string, panel:object)`


### Wrapping targets with graphite functions

`wrapWith(target:string, func:string, value:*)`

Wraps an existing target in a graphite target (i.e. `alias`)


## Contributing

1. Fork it ( https://github.com/[my-github-username]/graf-dash/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
