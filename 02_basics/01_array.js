//array

const myArr = [0,1,2,3,4];
const name = ["aman","hitesh"];
const myArr2 = new Array(1,2,3,4);
// console.log(myArr[0]);
// console.log(myArr2);

//array method

// myArr.push(7);
// myArr.push(8);
// myArr.pop();
// myArr.unshift(2);
// myArr.shift();
// console.log(myArr);
// console.log(myArr.length);
// console.log(myArr[0]);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));
const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

//slice , splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("C ",myArr);
console.log("B ",myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C ",myArr);