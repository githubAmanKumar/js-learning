//singleton
// Object.create 

//object literals

const mySym = Symbol("key1")
const jsUser = {
    name: "Aman",
    [mySym]: "mykey1",
    age: "21",
    location: "Saharanpur",
    "full email": "mail@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["mon","sat"]
}

// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["name"]);

// console.log(jsUser.full email); //will throw error
// console.log(jsUser["full email"]);
// console.log(jsUser[mySym]);

jsUser.name = "kumar";
// console.log(jsUser);

// Object.freeze(jsUser);
jsUser.name = "kk";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello js user");
}
jsUser.greetingTwo = function() {
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());