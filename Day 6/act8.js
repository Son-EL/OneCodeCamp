function applyFunction(func, array) {
    return array.map(func);
}

// Example usage:
let square = function(x) {
    return x * x;
};

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = applyFunction(square, numbers);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
