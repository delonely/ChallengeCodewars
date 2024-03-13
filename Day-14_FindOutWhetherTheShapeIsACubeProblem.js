//PROBLEM
/*
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer
*/

//TEST CASE
/*
    assert.strictEqual(cubeChecker(  8, 3), false);
    assert.strictEqual(cubeChecker(  8, 2), true );
    assert.strictEqual(cubeChecker( -8,-2), false);
    assert.strictEqual(cubeChecker(  0, 0), false);
    assert.strictEqual(cubeChecker(  1, 5), false);
    assert.strictEqual(cubeChecker(125, 5), true );
*/

//BREAKING UP THE PROBLEM
/*
(125, 5), true -> true because 5 ** by 3 so Volume = Side
(8, 3), false) -> false because 3 ** by 3 is 27 so Volume != Side
also return false for invalid number (<=0 || = 0)
*/

// function cubeChecker(volume, side){
//     if((volume <= 0 || side <= 0) || (volume != side ** 3)){
//         return false
//     } else {
//         return true
//     }
//   };

// Hanya check jika volume = side ^ 3
// However, check jika side > 0, karena jika side <=0 bisa return true jika volume = 0, atau volume = side ^ 3 but result is minus
let cubeChecker = (volume, side) => volume == side ** 3 && side > 0;

 console.log(cubeChecker(8,3))
 console.log(cubeChecker(8,2))
 console.log(cubeChecker(-8,-2))
 console.log(cubeChecker(0,0))
 console.log(cubeChecker(1,5))
 console.log(cubeChecker(125,5)) 