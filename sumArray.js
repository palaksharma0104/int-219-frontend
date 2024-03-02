function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage:
console.log(sumArray([1, 2, 3, 4, 5])); // Should output 15
console.log(sumArray([-1, 5, 7])); // Should output 11
