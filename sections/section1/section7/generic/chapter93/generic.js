// console.log("Generic");
// chapter 93 introuction to generics this is in ts not js
// Flexible And REsuable Code
// chapter 94 
// Built-In Generics And What are Generics
// const newArray=[];
// but 
// Generics type:
// const names:Array<string>=[];
// this is Generics one tyrpe
// the other type of generics is js function promise
// const promise:Promise<any>=new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//       resolve("this is done");
//   }, 2000)
// })
// promise.then((data)=>{
//     data.split(' ')
// })
// chapter 95
// Creating a Generic function
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: "raheel" }, { age: 13 }));
