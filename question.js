// ========= 1. Reverse a String

// let nameStr = ["Muhammad Jawad","asad Raza", "hammad"]

// function reverseString(str) {
//     for(let i = str.length -1; i >= 0; i--){
//         console.log(str[i])
//     }
// }

// let res = reverseString(nameStr)

// ========== 2. Find the Factorial of a Number

// function factorial(num) {
//   if (num === 0) {
//     return (num = 1);
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// // let userVal = +prompt("Enter a Number")

// let res = factorial(5);

// console.log(res);

// =========== 3. Check if a Number is Prime

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   //             2       5
//   for (let i = 2; i < num; i++) {
//     console.log("loop >>>>", i);
//     if (num % i === 0) {
//       console.log("condition >>>>", i);
//       return console.log("Its not a prime number");
//     } else {
//       return console.log("its a prime number");
//     }
//   }
// }

// isPrime(5);

// ============ 4. Sum of an Array

function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}


let arr = [12, 41, 5, 3, 9, 8 , 22,1];

sumArray(arr)
