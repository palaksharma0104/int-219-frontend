function coinToss() {
  // Generate a random number between 0 (inclusive) and 1 (exclusive)
  const randomNumber = Math.random();

  // Check if the number is less than 0.5 (heads) or greater than or equal to 0.5 (tails)
  if (randomNumber < 0.5) {
    return "heads";
  } else {
    return "tails";
  }
}

// Example usage
const result = coinToss();
console.log(result); // This will display either "heads" or "tails"
