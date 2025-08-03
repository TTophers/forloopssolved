
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  let sum = 0;
  let count = 0;

  for (let i in array) {
    sum += array[i];
    count += 1;
  }

  if (count === 0) return 0;

  return sum / count;
}


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  let sum = 0;

  for (let i = 0; str[i] !== undefined; i++) {
    let code = str[i].charCodeAt(0);
    if (code >= 48 && code <= 57) {
      sum += code - 48;
    }
  }

  return sum;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
