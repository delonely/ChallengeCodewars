//PROBLEM
/**
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?
Examples (input --> output):

123  --> "123"
999  --> "999"
-100 --> "-100"
*/

// function numberToString(num) {
//   return String(num);
// }

const numberToString = (num) => String(num);

console.log(numberToString(123));
console.log(numberToString(999));
console.log(numberToString(-100));
