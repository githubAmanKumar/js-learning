function calcuateCarPrice(val1,val2,...num1) {
    return num1;
}
// console.log(calcuateCarPrice(2,60,1200,9,67,8,888));

const user = {
    username : "sam",
    price : 999
}
function objPass(passingpara) {
    // console.log(`username is ${passingpara.username} and and course fee is ${passingpara.price}`);
}
// objPass(user);
objPass({
    username:"Sama",
    price: 999
})

const myNewArray = [100,200,300,400];

function returnArray(getArray) {
    return getArray[1]
}
console.log(returnArray(myNewArray));