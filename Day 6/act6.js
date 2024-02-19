let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// main func
function mathOperation(num1, num2, matOp) {
    return matOp(num1, num2);
}
function add(a, b) {
    return a + b;
}
function subt(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    if (b === 0) {
        return "Dividing any w/ 0 is UNDEFINED.";
    }
    return a / b;
}

// variables for each op
let outadd = mathOperation(num1, num2, add);
let outsubt = mathOperation(num1, num2, subt);
let outmult = mathOperation(num1, num2, mult);
let outdiv = mathOperation(num1, num2, div);

// output
console.log("Result for Addition: " + outadd);
console.log("Result for Subtraction: " + outsubt);
console.log("Result for Multiplicaiton: " + outmult);
console.log("Result for Division: " + outdiv);
