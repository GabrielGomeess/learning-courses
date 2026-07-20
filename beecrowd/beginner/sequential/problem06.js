var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notaA = Number.parseFloat(lines.shift())
let notaB = Number.parseFloat(lines.shift())

let MEDIA = ((notaA * 3.5) + (notaB * 7.5)) / (3.5 + 7.5)

console.log("MEDIA = " + MEDIA.toFixed(5))