function isMultipleOf3Or5(number) {
    if (number <= 0) {
        return "Please enter a positive integer.";
    }

    let isMultipleOf3 = (number % 3 === 0);
    let isMultipleOf5 = (number % 5 === 0);

    if (isMultipleOf3 && isMultipleOf5) {
        return "Multiple of both 3 and 5";
    } else if (isMultipleOf3) {
        return "Multiple of 3";
    } else if (isMultipleOf5) {
        return "Multiple of 5";
    } else {
        return "Not a multiple of 3 or 5";
    }
}

// Example usage:
let result = isMultipleOf3Or5(15);
console.log(result); // Output: Multiple of both 3 and 5

result = isMultipleOf3Or5(9);
console.log(result); // Output: Multiple of 3

result = isMultipleOf3Or5(25);
console.log(result); // Output: Multiple of 5

result = isMultipleOf3Or5(7);
console.log(result); // Output: Not a multiple of 3 or 5
