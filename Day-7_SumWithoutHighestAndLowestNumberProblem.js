//PROBLEM
/*
Task

1.Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
2.The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

//TEST CASE
/*
it("example tests", ()=>{
  assert.strictEqual( sumArray(null)                     , 0 );
  assert.strictEqual( sumArray([ ])                      , 0 );
  assert.strictEqual( sumArray([ 3 ])                    , 0 );
  assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
  assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
  assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
  assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
  assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
*/


function sumArray(array) {

  //1.if null/empty/nothing/none then return 0
  if (array === null || array <= 2) return 0
  //2.initialization to count the total element
  let totalSum = 0;
  //3.sort the array
  let sortedArray = array.sort((a, b) => a - b);
  //4.looping the element of array, but skip the first element and the last element
  for(i = 1; i < sortedArray.length - 1; i++){
    totalSum += sortedArray[i];
  }
  return totalSum;
}


console.log(sumArray([ ]));

