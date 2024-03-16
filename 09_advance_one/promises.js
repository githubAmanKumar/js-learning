const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls,cryptography,network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
});

promiseOne.then(function () {
    console.log("Promise Consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task3 is complete');
        resolve({ username: "Aman", Age: 22 })
    }, 1000)
});
promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task4 is complete');
        let error = false;
        if (!error) {
            resolve({ username: "hiteshSir", channel: "chaiAurCode" })
        } else {
            reject("ERROR: something went wrong")
        }

    }, 1000)
});
promiseFour.then(function (user) {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("finally promise is resolved or rejected");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log('Async task4 is complete');
        let error = true;
        if (!error) {
            resolve({ username: "Javascrip", password: 123 })
        } else {
            reject("ERROR: JS went wrong")
        }

    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/githuAmankumar')
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res);
})
.catch((error)=> console.log(error))
