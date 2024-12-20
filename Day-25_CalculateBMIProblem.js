// function calculateBMI(weight, height){
//     let BMI = weight / (height**2);

//     if (BMI <= 18.5) {
//         return "Underweight";
//     } else if (BMI <= 25.0) {
//         return "Normal";
//     } else if (BMI <= 30.0) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }

// change into readable function
function calculateBMI(weight, height){
    let BMI = weight / (height**2);

    if (BMI <= 18.5) return "Underweight";
    if (BMI <= 25.0) return "Normal";
    if (BMI <= 30.0) return "Overweight";

    return "Obese";
}

console.log(calculateBMI(40, 180));