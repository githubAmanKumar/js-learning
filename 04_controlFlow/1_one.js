// if
// const isUserLoggedIn = false;
// if (isUserLoggedIn) {
//     console.log("UserLoggedIn");
// }
// else {
//     console.log("no user not LoggedIn");
// }

// =================================

// const score = 200;
// if (score > 100) {
//     let power = "fly";
//     console.log(`user power : ${power}`);

// }
// console.log(`user power : ${power}`);

// =================================

// const balance = 1000;
// if (balance>500) console.log("test"),console.log("test2"); //is tarah code nhi karna hai

// if (balance<500) {
//     console.log("less than 500");
// } else if(balance<700) {
//     console.log("less than 700");
// }
// else if(balance<1200) {
//     console.log("less than 1200");
// }
// else{
//     console.log("if any condition not executed then default else executes");
// }

// =================================

// const UserLoggedIn = true;
// const debitCard = true;
// if (UserLoggedIn && debitCard && 2==3) {
//     console.log("allow to buy courses");
// }

const UserLoggedInFromGoogle = false;
const UserLoggedInFromEmail = true;
if (UserLoggedInFromEmail || UserLoggedInFromGoogle) {
    console.log("user can log in");
}
