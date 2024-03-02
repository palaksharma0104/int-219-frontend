function removeDuplicates(numbers) {
  // Use a Set to inherently remove duplicates:
  return [...new Set(numbers)];
}

// Example usage:
const myArray = [1, 4, 2, 3, 4, 1, 5];
const uniqueArray = removeDuplicates(myArray);
console.log(uniqueArray); // Output: [1, 4, 2, 3, 5]
