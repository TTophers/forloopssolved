
// EXERCISE 19
// Please, read the exercise-info/reverse.md to get the initial data of what is the expected result of this exercise.
// reverseArray([1, 2, 3 ,4]) => [4, 3, 2, 1]
// NOTE: You can NOT use the array.reverse() method in your code

export function reverseArray(array) {
  const result = [];
  const temp = [];
  for (const item of array) {
    temp.push(item);
  }
  let count = 0;
  for (const _ in temp) {
    count++;
  }
  for (let i = count - 1; i >= 0; i--) {
    result.push(temp[i]);
  }
  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-19"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
