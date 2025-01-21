// const promiseOne = new Promise((resolve, reject) => {
//     //Do an async task
//     //Db calls, cryptography,network
//     setTimeout(() => {
//         console.log("Async Task Is Complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(() => {
//     console.log("Promised Consumed");
// }).catch((err) => {
//     console.log(err);
//     console.log("err agya ha promise one ma");

// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ username: "Muhammad Jawad", email: "jawad@gmail.com", password: "jawad1122.js" })
//     }, 1000)
// })

// promiseThree.then((user) => {
//     console.log(user);

// })

// const getAllUser = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await res.json()

//         console.log("data>>> agya", data);

//     } catch (error) {
//         console.log("err >>>", error);

//     }
// }

// getAllUser()

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => {
//     return res.json()
// })
// .then((data) => {
//     console.log(data);
//     console.log("data agya");
    
// })
// .catch((err) => {
// console.log("err>>> agya", err);

// })