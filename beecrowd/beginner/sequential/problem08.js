var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numA = Number.parseInt(lines.shift())
let numB = Number.parseInt(lines.shift())
let numC = Number.parseInt(lines.shift())
let numD = Number.parseInt(lines.shift())

let diferenca = (numA * numB - numC * numD)

console.log("DIFERENCA = " + diferenca)