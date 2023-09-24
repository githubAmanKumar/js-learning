function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N======");
}
// sayMyName();

// function addTwoNumbers(num1,num2) {
//     console.log(num1+num2);
// }
// addTwoNumbers(1,2);

function addTwoNumbers(num1,num2) {
    // let result = num1 + num2;
    // return result;
    // console.log("Aman");  //return ke baad kuch bhi print nahi hota hai
    return num1 +num2 ;
}
const result = addTwoNumbers(1,2);
// console.log("result is ",result);

function userLogin(username = "Sam") {
    if (username == undefined) {
        return "Please enter username!";
    }else{
        return `${username} is just logged in!`;
    }
      
}
console.log(userLogin("Aman"));