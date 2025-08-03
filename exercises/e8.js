
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let greatestIndex = 0;

  for (let i = 1; ; i++) {
    if (array[i] === undefined) {
      break;
    }
    if (array[i].balance > array[greatestIndex].balance) {
      greatestIndex = i;
    }
  }

  const result = [];
  result.push(array[greatestIndex]);
  return result;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
