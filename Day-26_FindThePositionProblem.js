function position(letter){
    //1. store the value of ascii into variable
    let charCode = 96;

    //2. convert letter into lowercase
    let letterLowercase = letter.toLowerCase();

    //3.find the position of the alphabet
    const position = letterLowercase.charCodeAt() - charCode;

    return `Position of alphabet: ${position}`
}

console.log (position("e"))