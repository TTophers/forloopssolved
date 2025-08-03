// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  const result = [];
  const lowerLetter = letter.toLowerCase();

  for (let i = 0; i < 5; i++) {
    const name = array[i].name;
    const lowerName = name.toLowerCase();

    // Loop until the character is undefined, not a fixed 5
    for (let j = 0; lowerName[j] !== undefined; j++) {
      if (lowerName[j] === lowerLetter) {
        result.push(name);
        break;
      }
    }
  }

  return result;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
