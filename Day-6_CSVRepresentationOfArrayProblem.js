//PROBLEM
/*
Create a function that returns the CSV representation of a two-dimensional numeric array.
*/

//TEST CASE
/*
[
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
] 

'0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'

array length > 2
*/

//BREAKING UP THE PROBLEM
/*
Q:
1.What is CSV format?
2.What is \n?
3.How to make array as string?
4.How to check array inside an array?

A:
1.text file format that use commas to separate values (so we need to make the arrays into string and separates it using commas)
2.\n is a line break (escape code for a newline)
3.using .toString() function
4.using for loops 
*/

//STEP:
/*
1.make the first for loop to loop inside the array
2.make the second for loop to loop the array length
*/


function toCsvText(array) {
    for (let i = 0; i < array.length; i++){ 
        return array.join("\n");
       
    }
}

// let toCsvText = (array) => array.join("\\n");

console.log(
    toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
])
);