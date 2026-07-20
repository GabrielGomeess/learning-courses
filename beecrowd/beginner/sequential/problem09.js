var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numberEmployee = Number.parseInt(lines.shift())
let hoursWorked = Number.parseInt(lines.shift())
let salaryPerHour = Number.parseFloat(lines.shift())

let salary = hoursWorked * salaryPerHour

console.log("NUMBER = " + numberEmployee)
console.log("SALARY = U$ " + salary.toFixed(2))


