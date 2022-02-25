type Admin={
    name:string;
    priveliges:string[]
}
type Employee={
    name:string;
    startDate:Date
}

type ElevatedEmpolye=Admin & Employee;


const e1:ElevatedEmpolye={
    name:"Max",
    priveliges:["create-server"],
    startDate:new Date()
}

console.log(e1);
// intersection of Multiple types and then define Object