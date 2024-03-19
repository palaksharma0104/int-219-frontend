function reverseVowels(str) {
  // Define vowels as lowercase and uppercase letters
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  // Convert string to array for easier manipulation
  const chars = str.split('');

  // Initialize two pointers: left and right
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    // Move left pointer until it finds a vowel
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }

    // Move right pointer until it finds a vowel (or reaches the left pointer)
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }

    // Swap the characters at left and right pointers (if both are vowels)
    if (vowels.has(chars[left]) && vowels.has(chars[right])) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
    }

    // Move pointers inwards
    left++;
    right--;
  }

  // Join the character array back into a string
  return chars.join('');
}

// Example usage
const str = "hello world";
const reversedVowelString = reverseVowels(str);
console.log(reversedVowelString); // Output: "holle wolrd"
