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

// Removing number 8
let index8 = arr.indexOf(8);
if (index8 !== -1) {
  arr.splice(index8, 1);
}
// Removing number 31
let index31 = arr.indexOf(31);
if (index31 !== -1) {
  arr.splice(index31, 1);
}
console.log("Array after removing 8 and 31:", arr);
