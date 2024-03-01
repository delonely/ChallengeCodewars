//PROBLEM
/*
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

    number of pillars (≥ 1);
    distance between pillars (10 - 30 meters);
    width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/

//TEST CASE
/*
number of pillars= 1, distance= 10m, and width= 10cm => so the distance between the first and last pillar is 0cm

number of pillars= 2, distance= 20m, and width= 20cm => so the distance between the first and last pillar is 2000cm

number of pillars= 11, distance= 15m, and width= 30cm => so the distance between the first and last pillar is 15270cm
*/

//BREAKING UP THE PROBLEM
/*
Q:
1.How to and what is the formula to convert distance from M to CM ?
2.How to calculate the distance between the first and last pillars without the width of the first and last pillars?
3.how to calculate the distance if there is only 1 pillar?
4.how to calculate the distance if there is two pillars?

A:
1.cm = m/0.01, so distance/0.01
2.if there is more than 1 pillars:
    first: 
        calculate the pillar distance 
        (the converted pillars distance * (total pillars - 1))
    second:
        calculate the pillar width 
        (width * (total pillars - 2))
    third:
        sum the result from first step and second step
3. if there is only 1 pillar then the distance = 0
4. if there is 2 pillar then the distance same with the dist value but converted into cm
*/

//SOLUTION 1
// function pillars(numPill, dist, width) {
//     if (numPill === 1) {
//         return dist = 0;
//     } else if (numPill === 2){
//         return dist/0.01;
//     } else {
//         return ((dist/0.01) * (numPill - 1) + (width * (numPill - 2)));
//     }
// }

//SOLUTION 2
// function pillars(numPill, dist, width) {
//     const convertedDist = dist/0.01;
//     const pillarDistance = (convertedDist * (numPill - 1));
//     const pillarWidth = (width * (numPill - 2));
//     const totalDistance = pillarDistance + pillarWidth;

//     return numPill === 1 ? dist = 0 : numPill === 2 ? convertedDist : totalDistance;
// }

// console.log(pillars(11,15,30));


// Solution 3
// Recursive, readable version
function pillars(numPill, dist, width){
    if (numPill <=1 ) return 0;

    // this part is where we call recursive thingy
    var value = pillars(numPill - 1, dist, width);
    // this part is where we count pillar thingy
    value += (dist / 0.01) + (numPill <= 2 ? 0 : width);

    return value;
    // simplified version
    //var value = numPill <= 1 ? 0 : pillars(numPill - 1, dist, width) + (dist / 0.01) + (numPill <= 2 ? 0 :width);
    //return value;
}

// Simplified solution 3
// Recursive, but not readable
//let pillars = (numPill, dist, width) => numPill <= 1 ? 0 : pillars(numPill - 1, dist, width) + (dist / 0.01) + (numPill <= 2 ? 0 :width);

console.log(pillars(11, 15, 30));

