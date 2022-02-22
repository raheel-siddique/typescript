// console.log("new 20");

// in core types:
// Enum is also not in js
// enum{NEW, OLD} Added By ts autmatically enumerated global constant 
// identifiers
enum Role {ADMIN=5, READ_ONLY="this is first"}
let person:{
    name:string;
    age:number;
    role:any;
}={
    name:"Raheel",
    age:20,
    role:Role.ADMIN
}
console.log(person.name);