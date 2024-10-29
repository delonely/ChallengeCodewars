//Problem Count The Sheep
//1.No negative number
//2.return num1 sheep...num2 sheep etc

// function countSheep(num) {
//     let str = "";
//     for (let i = 1; i <= num; i++) {
//         str += `${i} sheep...`;
//     }
//     return str;
// }

function countSheep (num) {
    let str = num > 1 ? countSheep(num-1) : "";
    return `${str}${num} sheep...`;
}

console.log(countSheep(8));