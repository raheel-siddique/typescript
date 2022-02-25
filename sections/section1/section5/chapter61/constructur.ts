// console.log("createing class");
// createing class
//  function in ibject called method
class nameMy{
    name:string;
    constructor(n:string){
     this.name=n;
    }
    describe(){
        console.log("account"+this.name);
    }
}
const account=new nameMy("Raheel");
console.log(account);
nameMy.describe();