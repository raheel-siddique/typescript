// console.log("new 27");


function addNew(number1:number, number2:number){
    return number1 + number2;
}
const result= addNew(2,8)
console.log(result);
let combineValues:Function;
combineValues=addNew;
console.log(combineValues(9,2));
