const user = {
    username: "Aman",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn) {
    this.username= username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;
    this.greet= function(){
        console.log(`Welcome ${username}`);
    };

    return this //implicitly defined
}
const userOne = new User("Aman",2,true);
const userTwo = new User("Hitesh",2,false);

// console.log(userOne.constructor);
console.log(userOne.instanceof);