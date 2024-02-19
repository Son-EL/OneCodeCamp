// Acitvity #2

function celtofah() {
    let cels = parseFloat(prompt("Enter temperature in Celsius:"));

    let fahren = (cels * 9/5) + 32;
    return fahren;
}
let temp = celtofah();
console.log("Temp is:", temp, " F");