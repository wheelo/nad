'use strict';

var binding = require('nad-bindings')('node_hello');

console.log('node version', process.version);
console.log('hello', binding.hello());
