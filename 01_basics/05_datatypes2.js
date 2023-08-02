//1. Primitive
// 7 types : string , number , boolean , null , undefined , symbol , Bigint

// const score = 100;
// const scorevalue = 100.3;
// const isLoggedIn = False;
const outsideTemp = null;
// const user; //value will be undefined

// const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id==anotherId);

// const bigNUmber = 4534647578947609869n;

//2. Reference (Non-primitive)

// Array , Objects , Functions
const heroes = ["Shaktikman","Nagraj","Doga"];
let myObj = {
    name: "Aman",
    age:21
}
const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myFunction);
// console.log(typeof outsideTemp);
// console.log(typeof anotherId);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive),Heap(Non-Primitive)

let myName = "Aman";
let lastName = myName;
lastName = "Kumar";
// console.log(myName);
// console.log(lastName);
let user1 = {
    name:"Aman",
    age:21
}
let user2 = user1;
user2.name = "Kumar";
console.log(user1.name);
console.log(user2.name);
