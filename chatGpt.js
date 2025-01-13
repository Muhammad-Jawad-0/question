// ----------================ Question 1 sort array

// let arr = [10, 20, 5, 100, 50, 200, 30, 70];
// let temp;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

// console.log("temp", arr);

// ----------================ Question 2: Sum of Numbers in an Array

// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
// }

// console.log(sum)

// ----------================ Question 3: Check Even or Odd Number

// function evenOddNum(userInput) {
//   if (userInput % 2 === 0) {
//      console.log("it's even number");
//   } else {
//      console.log("It's odd number");
//   }
// }

// let input = +prompt("enter a number");
// evenOddNum(input)

// ----------================ Question 4: Reverse a String

// let str = [10,9,6,2,3,17]
// let reverse = []
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse.push(str[i])
// }

// agr funtion banata tu return krwata
// console.log(reverse);

// ----------================ Question 5: Find the Largest Number in an Array

// let arr = [10,9,6,2,3,200,17,201];
// let max = 0

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }

// console.log(max)

// ----------================ Question 6: Count Vowels in a String

// let stringVal = "hello i am jawad";
// let vowels = "aeiou";
// let subVowels = "wh"
// let vowelsCount = 0;
// let subVowelsCount = 0;

// let lowerCaseStr = stringVal.toLowerCase()

// for(let i = 0; i < stringVal.length; i++){
//     if(vowels.includes(lowerCaseStr[i])){
//         vowelsCount++;
//     }
//     if(subVowels.includes(lowerCaseStr[i])){
//         subVowelsCount++
//     }
// }

// console.log("vowels count:",vowelsCount)
// console.log("SubVowels count:",subVowelsCount)

// ----------================ Question 7: FizzBuzz Problem

// for (let i = 1; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// ---------------- last Interview ----------------

// const func = (num) => {
//   return (value = num == 5 ? num + 3 : num - 3);
// };

// func(8);
// console.log(value);


// const findUniquePairs = (arr, tar) => {
//     let pairs = [];

//     for (let i = 0; i < arr.length; i++) {
//         console.log("i loop");

//         for (let j = i + 1; j < arr.length; j++){
//             console.log("j loop");

//             if(arr[i] + arr[j] === tar){
//                 pairs.push(arr[i], arr[j])
//             }
//         }
//     }

//     return pairs
// }

// let arr = [2, 4, 3, 7, 5, -1, 6];
// let target = 6;

// let res = findUniquePairs(arr, target);
// console.log(res);


function findUniquePairs(array, target) {
    let sumPair = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                sumPair.push([array[i], array[j]])
            }
        }
    }

    return sumPair
}

let arr = [2, 4, 3, 7, 5, -1, 6, 0];
let target = 6;

let result = findUniquePairs(arr, target);

console.log(result);