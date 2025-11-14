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

// creating sequentialSearch function

function sequentialSearch(array, value) {
  console.log("Searching for:", value);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      console.log("Found", value, "at index", i);
      return i; // return the index
    }
  }

  console.log(value, "was not found in the array");
  return -1;
}
//console.log(sequentialSearch(arr, 20));
console.log(sequentialSearch(arr, 300));

//creating binarySearch function
function binarySearch(array, value) {
  console.log("Binary searching for:", value);

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === value) {
      console.log("Found", value, "at index", mid);
      return mid;
    }
    else if (array[mid] < value) {
      low = mid + 1;  
    }
    else {
      high = mid - 1; 
    }
  }

  console.log(value, "was not found in the array");
  return -1; 
}

console.log(binarySearch(arr, 23));
console.log(binarySearch(arr, 200));
