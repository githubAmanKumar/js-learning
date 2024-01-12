const user = {
    username:"Aman",
    fee:999,
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "Aman"
//     console.log(this.username);
// }

// const chai = function(){
//     let username = "Aman"
//     console.log(this.username);
// }

// const chai = ()=>{
//     let username = "Aman"
//     console.log(this);
// }
// chai()

// const add=(num1,num2)=>{
//     return num1+num2;
// }

// const add=(num1,num2)=> num1+num2;
// const add=(num1,num2)=> (num1+num2);
const add=(num1,num2)=> ({username:"Aman"});

console.log(add(6,4));