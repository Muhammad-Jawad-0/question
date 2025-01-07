// -------------------------------------checkEvenOdd------------------------------
// const checkEvenOdd = (num) => {
//     if (typeof num === "number") {
//         if (num % 2 === 0) {
//             return "Even"
//         }
//         else {
//             return "Odd"
//         }

//     } else {
//         return "Invalid Input"
//     }
// }

// const checkEvenOdd = (num) => {
//     if (typeof num === "number") {
//        return num % 2 === 0 ? "Even" : "Odd"
//     } else {
//         return "Invalid Input"
//     }
// }

// console.log(checkEvenOdd(4)); // Output: "Even"
// console.log(checkEvenOdd(7)); // Output: "Odd"
// console.log(checkEvenOdd("8")); // Output: "Invalid input"

// -------------------------------------------------findFactorial--------------------------------------

// const findFactorial = (num) => {
//     if (num < 0 || typeof num !== "number") {
//         return "invalid input"
//     } else if (num === 0) {
//         return 1
//     } else {
//         return num * findFactorial(num - 1)
//     }
// }

// let res = findFactorial(5)

// console.log(res);

// -------------------------------------------- reverseFun ------------------------------------------------

// 3. Reverse a String
// const reverseFun = (name) => {
//     let reverse = "";
//     for(let i = name.length-1; i >= 0; i--){
//         reverse += name[i]
//     }
//     return reverse
// }

// let name1 = "my name is jawad";
// let res = reverseFun(name1);
// console.log(res);

// ----------------------------------------------------------------------------------------

// 4. Check Prime Number

// let cheakPrimeNumber = (num) => {
//     if (num <= 1) {
//         return `${num} please greater than 2`
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return `${num} <<< No it's not a prime number`
//         }
//     }

//     return `${num} <<< Yes it's a prime number`
// }

// console.log(cheakPrimeNumber(2));


// const primeNumber = (num) => {
//     if (num <= 1) {
//         return "Negative or One number is not a prime number"
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return "it's not a prime number"
//         }
//     }
//     return "Yes it's a prime number"
// }


// let res = primeNumber(3);
// console.log(res);

// 5. Find the Largest Number

// const largestNumber = (arr) => {
//     let max = arr[0];

//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }

//     return max
// }

// let num = [1,32,44,2,100,599,51,1000]
// let res = largestNumber(num)

// console.log(res);

// 6. Fibonacci Series