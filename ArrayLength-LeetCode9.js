// Write a function argumentsLength that returns the count of arguments passed to it.
// Input: argsArr = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.

// Input: argsArr = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.

var argumentsLength = function(...args) {
    return args.length;
};


argumentsLength(1, 2, 3); // 3