//PROBLEM
/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
Examples

Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
Assumptions

    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return 0.
 */

//TEST CASE
/*
Test.assertEquals(sum([]), 0);
Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
 */

//BREAKING UP THE PROBLEM
/**
1.if the arrays are null -> return 0
2.make a variable to store the sum total
3.looping through the arrays
 */

// Sum Numbers
function sum(numbers) {
  "use strict";
  //1.check if the arrays are nulls/not
  if (numbers === null) return 0;
  //2.make a variable to store the sum total
  let sumTotal = 0;
  //3.loop through the arrays
  for (let i = 0; i < numbers.length; i++) {
    sumTotal += numbers[i];
  }
  return sumTotal;
}

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1])); //should be 9.2

//let push the result into git
