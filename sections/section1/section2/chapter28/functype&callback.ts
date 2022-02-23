// console.log("new 28");

// inside of function we pass a function is called callback function

function addNew(number1:number, number2:number, addResult:(num:number)=>void){
    return number1+number2+addResult
}