var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number.parseInt(lines.shift())
let b = Number.parseInt(lines.shift())

let SOMA = a + b

console.log('SOMA = ' + SOMA)