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

const findFactorial = (num) => {
    if (num < 0 || typeof num !== "number") {
        return "invalid input"
    } else if (num === 0) {
        return 1
    } else {
        return num * findFactorial(num - 1)
    }
}

let res = findFactorial("5")

console.log(res);
