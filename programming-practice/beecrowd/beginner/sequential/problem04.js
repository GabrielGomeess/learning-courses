var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pi = 3.14159;
let r = Number.parseFloat(lines.shift());

let a = pi * (r**2)

console.log("A=" + a.toFixed(4))