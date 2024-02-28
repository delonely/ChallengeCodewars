//PROBLEM:
/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

//Breaking up the Problem:
/*
Q:
1.What is odd and even number?
2.How to calculate and check if the number is odd or even?
3.How about negative number?

A:
1.odd number is a number which are not divisible by 2
even number is a number which are not divisible by 2

2. modulo the number by 2, and check if we get the remainder 1 then it's odd number, else it's even number
 */

//TEST CASE
/*
evenOrOdd(2), "Even"
evenOrOdd(7), "Odd"
evenOrOdd(-42), "Even"
evenOrOdd(-7), "Odd"
evenOrOdd(0), "Even"
*/

//SOLUTION 1
// function evenOrOdd(number) {
//     if (number % 2 !== 0) {
//         return "Odd";
//     } else if (number % 2 == 0) {
//         return "Even";
//     }

// }

//SOLUTION 2
function evenOrOdd(number) {
    return number % 2 !== 0 ? "Odd" : "Even";
}

console.log(evenOrOdd(-7));


