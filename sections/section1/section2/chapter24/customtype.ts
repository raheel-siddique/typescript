// console.log("new 24");
// you can make custom type of data type


type combineAble=number;
type combineAbleString=string;
type combineAll= string|number|boolean

function addNew(number1:combineAll, number2:combineAbleString){
    return number1+number2;
}
const result=addNew("2","4");


console.log(result);