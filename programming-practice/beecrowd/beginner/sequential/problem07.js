var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notaA = Number.parseFloat(lines.shift())
let notaB = Number.parseFloat(lines.shift())
let notaC = Number.parseFloat(lines.shift())

let media = ((notaA * 2) + (notaB * 3) + (notaC * 5)) / (2 + 3 + 5)

console.log("MEDIA = " + media.toFixed(1))