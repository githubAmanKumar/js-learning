const userEmail = [];
// if (userEmail) {
//     console.log("got user email");
// } else {
//     console.log("dont have userEmail");
// }

// falsy values
// false, 0, -0, "", BigInt 0n, null, undefined, NaN

// truthy values
// 'false', "0", " ", [], {}, function(){}


// if you want to check empty array
// if (userEmail.length === 0) {
//     console.log("array is empty");
// } 

// if you want to check empty object

// const emptyObj = {}

// if (Object.keys(emptyObj).length===0) {
//     console.log("object is empty");
// }

// Nullish Coalescing Ooperator (??): null,undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = undefined ?? 1 ?? 6;

// console.log(val1);


// Ternary operator


// condition ? true : false

const teaPrice = 100;

teaPrice <=50 ? console.log("less than 50"):console.log("greater than 50");
