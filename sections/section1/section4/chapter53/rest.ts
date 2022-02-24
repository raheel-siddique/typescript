console.log("new 53");
// rest paramter means you can put multiple values like array  


const addNew=(a:number,...numbers:number[])=>{
    return a+...numbers;
}
console.log(addNew(2,12,34,5,46,57,78));
