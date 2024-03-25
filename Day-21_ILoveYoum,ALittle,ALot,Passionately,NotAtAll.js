//PROBLEM
/**
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    "I love you"
    "a little"
    "a lot"
    "passionately"
    "madly"
    "not at all"

If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
 */

//TEST CASE
/**
assert.strictEqual(howMuchILoveYou(7),"I love you")
    assert.strictEqual(howMuchILoveYou(3),"a lot")
    assert.strictEqual(howMuchILoveYou(6),"not at all")
 */

// function howMuchILoveYou(nbPetals) {
//   const phrases = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionately",
//     "madly",
//     "not at all",
//   ];

//   let index = (nbPetals % 6) - 1;

//   if (index === -1) {
//     index = phrases.length - 1;
//   }
//   return phrases[index];
// }

const phrases = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
];

const howMuchILoveYou = (nbPetals) => {
  let index = (nbPetals % 6) - 1;
  return index < 0 ? phrases.slice(-1)[0] : phrases[index];
}

console.log(howMuchILoveYou(6));
