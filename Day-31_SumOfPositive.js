/**
 * You get an array of numbers, return the sum of all of the positives ones.

    Example [1,-4,7,12] => 1 + 7 + 12 = 20

    Note: if there is nothing to sum, the sum is default to 0.

    TEST CASE
    const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    assert.strictEqual(positiveSum([]),0);
    assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    });
  });
 */

// function positiveSum(arr) {
//     if (arr === null) return 0;
//     let sum = arr.reduce(function(total, currentValue){
//         return currentValue > 0 ? total + currentValue : total;
//     }, 0);
//     return sum;
// }

let positiveSum = (arr) => arr.reduce((result, value) => ((value >0 ? value : 0) + result), 0);

console.log(positiveSum([]));
console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));