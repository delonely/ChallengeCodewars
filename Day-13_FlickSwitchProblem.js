//PROBLEM
/*
Task

Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.
Examples

['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Notes

    "flick" will always be given in lowercase.
    A list may contain multiple flicks.
    Switch the boolean value on the same element as the flick itself.
*/

// function flickSwitch(arr){

//   let flickSwitch = true;
//   let newArr = [];

//   for(let i = 0; i < arr.length; i++){
//     if( arr[i] === "flick"){
//         flickSwitch = !flickSwitch
//         newArr.push(flickSwitch);
//     } else {
//         newArr.push(flickSwitch);
//     }
//   }
//   return newArr
// }

// Solution 2 : Using array map
function flickSwitch(arr){
  let flickSwitch = true;
  return arr.map((value) => flickSwitch = value == 'flick' ? !flickSwitch : flickSwitch);
}

  //console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'flick', 'sunshine']));
  console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));