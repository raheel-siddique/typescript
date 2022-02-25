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

// function merge<T,U>(objA:T, objB:U){
// return Object.assign(objA, objB);
// }
// console.log(merge({name:"raheel"},{age:13}));
// const mergeObj = merge({name:"raheel"},{age:13})
// console.log(mergeObj.age); here we can access this bczz of generic


// chapter 96 Working With Constrains


// function merge<T extends object ,U extends object>(objA:T, objB:U){
//     return Object.assign(objA, objB);
//     }
//     console.log(merge({name:"raheel"},{age:13}));
//     const mergeObj = merge({name:"raheel"},{age:13})
//     console.log(mergeObj.age); extends obj means type must be  object
    // and this is called constains



    // chapter 97 another generic function
    // chapter 98 keyof constrains


    // chapter 99 Generic classess

    // chapter 101 Generic utility type
