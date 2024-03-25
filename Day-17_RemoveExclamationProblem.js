//PROBLEM
/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// function removeExclamationMarks(s) {
//     return s.replace(/[\.,!]/g, '');
// }

let removeExclamationMarks = (s) => s.replaceAll('!', '');
console.log(removeExclamationMarks("hello world!"));
console.log(removeExclamationMarks("hello world!!!!"));
console.log(removeExclamationMarks("!!!hello world"));