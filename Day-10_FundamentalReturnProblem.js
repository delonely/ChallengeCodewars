//PROBLEM
/*Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b
*/

//TEST CASE
/*
    assert.strictEqual(add(1,2),3)
    assert.strictEqual(multiply(1,2),2)
    assert.strictEqual(divide(2,1),2)
    assert.strictEqual(mod(1,2),1)
    assert.strictEqual(exponent(1,2),1)
    assert.strictEqual(subt(1,2),-1)
*/

function add(a,b){
    return a + b;
}

function divide(a,b){
    return a / b;
}

function multiply(a,b){
    return a * b;
}

function mod(a,b){
    return a % b;
}
   
function exponent(a,b){
    return a ** b;
}
    
function subt(a,b){
    return a - b;
}

console.log(add(1,2));
console.log(divide(6,2));
console.log(multiply(6,2));
console.log(mod(6,2));
console.log(exponent(6,2));
console.log(subt(6,2));
