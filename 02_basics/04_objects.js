// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "1";
tinderUser.name = "Aman";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "Some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Aman",
            lastName: "Kumar"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:"1",
        email:"a@gmail.com"
    },
    {
        id:"2",
        email:"b@gmail.com"
    },
    {
        id:"3",
        email:"c@gmail.com"
    }
]
// console.log(users[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));