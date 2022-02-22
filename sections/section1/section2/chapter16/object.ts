// console.log("new 16");

// in core types:
// object:
// {age:8}
// const person:object ={
//     name:"Raheel",
//     age:3
// }
// console.log(person.name);
// but you cant access this is ts
// you have to define object type
const person:{
    name:string;
    age:number;
}={
    name:"Raheel",
    age:10
}

console.log(person.age, person.name);