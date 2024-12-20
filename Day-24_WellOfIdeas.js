//PROBLEM
/**
 For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

 */

//TEST CASE
/**
 * assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
 */

// function well(x) {
//   let idea = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] === "good") {
//       idea += 1;
//     }
//   }
//   if (idea === 1 || idea === 2) {
//     return "Publish!";
//   } else if (idea >= 1) {
//     return "I smell a series!";
//   } else {
//     return "Fail!";
//   }
// }

const well = (x) => {
  // Use total + boolean since boolean return 1 for true and 0 for false
  let idea = x.reduce((total, currentValue) => total + (currentValue === "good"), 0);

  // Without using else, since return would break function and won't continue to next line
  if (idea <= 0) return "Fail!";
  if (idea <= 2) return "Publish!";
  return "I smell a series!";

}
console.log(well(["bad", "good", "good", "bad"]));
