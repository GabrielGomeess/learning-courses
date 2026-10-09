var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nameEmployee = lines.shift();
let salaryFixed = Number.parseFloat(lines.shift());
let salesTotal = Number.parseFloat(lines.shift());

let salaryTotal = salaryFixed + (salesTotal * 0.15)

console.log("TOTAL = R$ " + salaryTotal.toFixed(2))

