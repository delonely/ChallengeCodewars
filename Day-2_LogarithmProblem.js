/*
1.Day 2 of 365 Codewars
2.Logarithm

Problem:

Given a logarithm base X and two values A and B, return a sum of logratihms with the base X: log⁡XA+log⁡XB.

breakdown the problem:

1.what is logarithm?
2.what is base X
3.what is the formula to calculate logarithm with X: log xA + logXB
*/




/*
TEST CASE:
logs(10,2,3) => 0.7781512503836435
logs(5,2,3) => 1.1132827525593785
logs(1000,2,3) => 0.25938375012788123
*/

//SOLUTION 1
// function logs(x, a, b) {
//     //return (Math.log(a) / Math.log(x)) + (Math.log(b) / Math.log(x)) ;
//     return ((Math.log(a) + Math.log(b)) / Math.log(x));
// }

//SOLUTION 2
//let logs = (x, a, b) => ((Math.log(a) + Math.log(b)) / Math.log(x));

//SOLUTION 3 
// const logs = function (x, a, b) {
//     return ((Math.log(a) + Math.log(b)) / Math.log(x));
// };

//SOLUTION 4
logs = (x, a, b, l = Math.log) => l(a * b) / l(x)

console.log(logs(10,2,3))
console.log(logs(5,2,3))
console.log(logs(1000,2,3))