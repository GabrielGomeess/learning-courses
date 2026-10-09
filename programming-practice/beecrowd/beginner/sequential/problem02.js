var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number.parseInt(lines.shift())
let b = Number.parseInt(lines.shift())

let x = a + b

console.log("X = " + x)