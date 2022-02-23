"use strict";
// console.log("new 14");
function add(num1, num2, para, showResult) {
    if (showResult) {
        console.log(para + num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
const number1 = 4;
const number2 = 3.5;
const printResult = true;
const newPara = "this is me";
add(number1, number2, newPara, printResult);
// const result= add(number1,number2,printResult)
// console.log(result);
