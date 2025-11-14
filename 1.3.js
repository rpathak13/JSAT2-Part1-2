
// Create the array 
let arr = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log("original array", arr);

// Sort array in ascending order
arr.sort((a, b) => a - b);
console.log("Sorted array:", arr);

// Add 3 numbers (19, 23, 30)
arr.push(19, 23, 30);
arr.sort((a, b) => a - b);
console.log("New sorted array:", arr);

