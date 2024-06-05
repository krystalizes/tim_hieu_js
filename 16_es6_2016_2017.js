// ES6, còn được gọi là ECMAScript 2015, là một phiên bản lớn của ECMAScript, 
// ngôn ngữ chuẩn hóa mà JavaScript dựa trên.

// let, const cùng với block scope
var x = 10;
{
  let x = 2;
  // const x = 2;
}

// arrow function
const add = (a, b) => a + b;
console.log(add(1,2));

// template literal
const name = "Alice";
const message = `Hello, ${name}!`;
console.log(message);

// destructuring
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  let { firstName:fn, age:a } = person;
  console.log(fn, a);

const [a, b] = [1, 2];
console.log(a, b);

// dafault parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"

// spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// rest operator
function num(...numbers) {
    return numbers;
}
console.log(num(1, 2, 3, 4)); // [1, 2, 3, 4]

// class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Map, set
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits);
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("a");
console.log(letters);

//Promises
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then( res => res.json())
    .then( res => console.log(res))
    .catch(error => console.error(error));

/// ECMAScript 2016
// **
console.log(5**2) // 25
// **=
let x = 5;
console.log(x**=2);
// array.includes()
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false

/// ECMAScript 2017
// async/await
async function fetchUserData(userId) {
    try {
        let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');       
        let user = await response.json(); 
        console.log(user);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
fetchUserData(1);
// object.entries(), values()
let person1 = { name: 'Alice', age: 25 };
console.log(Object.entries(person1)); // [ ['name', 'Alice'], ['age', 25] ]
console.log(Object.values(person1));  // [ 'Alice', 25 ]


