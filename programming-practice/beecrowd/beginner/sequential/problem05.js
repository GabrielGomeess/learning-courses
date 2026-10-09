var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number.parseInt(lines.shift())
let b = Number.parseInt(lines.shift())

let PROD = a * b

console.log("PROD = " + PROD)
