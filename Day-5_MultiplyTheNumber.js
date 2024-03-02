//PROBLEM
/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

multiply(3) == 15 # 3 * 5¹
multiply(10) == 250 # 10 * 5²
multiply(200) == 25000 # 200 * 5³
multiply(0) == 0 # 0 * 5¹
multiply(-3) == -15 # -3 * 5¹
*/

//TEST CASE
/*
Test.assertEquals(multiply(10),250);
Test.assertEquals(multiply(5),25);
Test.assertEquals(multiply(200),25000);
Test.assertEquals(multiply(0),0);
Test.assertEquals(multiply(-2),-10);
*/

//BREAKING UP THE PROBLEM
/*
1. how to check number of digits of each number?
2. how to raised the number?
*/

//STEP
/* 
1.convert the number into string 
2.calculate the string length
3.if the number is negative, then the length of number is -1
4.the string number then multiply by the number
5.using Math.pow function to raised it by 5
*/

// function multiply(number){
//     //your code here
    
//     if (number >= 0) {
//         return (Math.pow(5,(number.toString().length)) * number);
//     } else {
//         return (Math.pow(5,(number.toString().length)-1) * number);
//     }

    
//   }

  let multiply = (number) => Math.pow(5, Math.abs(number).toString().length) * number;

 console.log(multiply(-3)); 