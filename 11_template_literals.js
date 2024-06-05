// dùng cặp dấu `` thay cho "" hay ''
let str = `Hello, World!`;
console.log(str); 
// cho phép nhúng biểu thức và biến vào chuỗi
let name = "Alice";
let age = 25;
let greeting = `My name is ${name} and I am ${age+5} years old.`;
console.log(greeting); // My name is Alice and I am 25 years old.
// giúp viết string trên nhiều dòng mà không cần /n 
console.log(`string text line 1
string text line 2`);
// tagged template: giúp tách các phần của chuỗi ra thành các mảng hoặc biến để dễ xử lý
function tag(strings, ...values) {
    console.log(strings); // ["Hello ", " you are ", ""]
    console.log(values);  // ["Alice", 25]
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}${strings[2]}`;
}
let taggedResult = tag`Hello ${name} you are ${age}`;
console.log(taggedResult); // Hello Alice you are 25
