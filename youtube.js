// let names = ["jawad", "asad", "furrukh", "ali", "muskan"];
// let names2 = ["Junaid", "Hammad", "Arsalan", "hassan", "Ahsan"];

// let newArr = [...names2, ...names];

// console.log(newArr)

// --------------

// const products = [
//   { name: "T-Shirt", category: "Cloth", price: 500 },
//   { name: "Laptop", category: "Electronics", price: 60000 },
//   { name: "Water Bottle", category: "Plastic", price: 200 },
// ];

// let newArr = products.filter(
//   (product) => product.category !== "Plastic" && product.category !== "Cloth"
// );

// console.log(newArr);

// const user = [
//   { name: "jawad", age: 20 },
//   { name: "asad", age: 25 },
//   { name: "farrukh", age: 25 },
// ];

// let newArr = user.map((user) =>
//   document.write(`<h1>${user.name}  <h2>${user.age}</h2> </h1>`)
// );

// -------------------

const user = [
  { name: "jawad", age: 20, role: "admin" },
  { name: "asad", age: 25, role: "user" },
  { name: "farrukh", age: 35, role: "admin" },
  { name: "Ali", age: 35, role: "user" },
];

let obj = {};

user.forEach((user) => {
  if (obj[user.role]) {
    obj[user.role].push(user);
  } else {
    obj[user.role] = [];
    obj[user.role].push(user);
  }
});

console.log(obj);
