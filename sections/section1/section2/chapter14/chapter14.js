// console.log("new 14");
function add(num1, num2, para, showResult) {
    if (showResult) {
        console.log(para + num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
var number1 = 4;
var number2 = 3.5;
var printResult = true;
var newPara = "this is me";
add(number1, number2, newPara, printResult);
// const result= add(number1,number2,printResult)
// console.log(result);
