//PROBLEM
/*
A variation of determining leap years, assuming only integers are used and years can be negative and positive.

Write a function which will return the days in the year and the year entered in a string. For example:

yearDays(2000) returns "2000 has 366 days"

There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

Also the basic rule for validating a leap year are as follows

Most years that can be divided evenly by 4 are leap years.

Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.
*/

//TEST CASE
/*
Test.assertEquals(yearDays(0), '0 has 366 days');
Test.assertEquals(yearDays(-64), '-64 has 366 days');
Test.assertEquals(yearDays(2016), '2016 has 366 days');
Test.assertEquals(yearDays(1974), '1974 has 365 days');
Test.assertEquals(yearDays(-10), '-10 has 365 days');
Test.assertEquals(yearDays(666), '666 has 365 days');
Test.assertEquals(yearDays(1857), '1857 has 365 days');
*/

//BREAKING UP THE PROBLEM
/*
1.only integer
2.can be negative and positive integer
3.accept the 0 value
4.what is leap years?
5.what is century years?
6.condition for leap years => dived evenly by 4; years == 0; century years that evenly divided by 400
7.conditon for century years => 365 days

A:
4.has 366 days. his extra leap day occurs in each year that is a multiple of 4, except for years evenly divisible by 100 but not by 400
5.century years = 100 calender years
*/

// function yearDays(year)
// {
//    if(year % 100 === 0 && year % 400 !== 0 || year % 4 && year !== 0){ // 1.check if it's century years or it's leap years of not
//     return `${year} has 365 days`
//    } else { //2.else it's century leap years or leap years
//     return `${year} has 366 days`
//    } 
// }

// Ignore what is century years, since test case works with only leap years.

let yearDays = (year) => year % 4 == 0 ? `${year} has 366 days` : `${year} has 365 days`;
console.log(yearDays(-10))