//PROBLEM
/*
Combine strings function

Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')

returns:

'James Stevens'
*/

//TEST CASE
/*
Test.assertEquals(combineNames('James', 'Stevens'), 'James Stevens')
 */

function combineNames(firstName, lastName) {
  return (`${firstName}` + ' ' + `${lastName}`);
}

console.log(combineNames('James', 'Stevens'))