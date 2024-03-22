//PROBLEM
/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/

//TEST CASE
/*
assert.deepEqual(norm(invert([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
assert.deepEqual(norm(invert([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
assert.deepEqual(norm(invert([])), []);
assert.deepEqual(norm(invert([0])), [0]);
*/

//STEP 
/*
1.loop through the array element
2.then multiply the elements by -1
*/

//SOLUTION 1
// function invert(array) {
//     for(let i = 0; i < array.length; i++){
//         array[i] = array[i] * (-1)
//     }
//     return array
// }

//SOLUTION 2
// function invert(array) {
//     let invertArray = [];
//     for(let i = 0; i < array.length; i++){
//        if(array[i] > 0){
//         invertArray.push(array[i] - (array[i] *2));
//        }
//        if (array[i] < 0){
//         invertArray.push(Math.abs(array[i]));
//        }  
//        if (array[i] == 0) {
//         invertArray.push(-0);
//        }
//     }  
//     return invertArray;
// }

// Solution 3
let invert = (array) => array.map((value) => value == 0 ? 0 : value * -1);
 
// console.log(invert([1,2,3,4,5]));
console.log(invert([0]));