// var có phạm vi hàm hoặc toàn cục 
(function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10
}())
// let và const có phạm vi khối(chỉ dùng được trong khối nó được khai báo)
(function exampleLet() {
    if (true) {
        // let y = 10;
        const y = 10;
    }
    console.log(y); // ReferenceError: y is not defined
}())
//const không tái gán được
const y = 2;
y=3;
// khai báo lại
var g = 1;
var g = 2; // Hợp lệ

let h = 1;
let h = 2; // SyntaxError: Identifier 'h' has already been declared

const i = 1;
const i = 2; // SyntaxError: Identifier 'i' has already been declared
//hoisting: gọi biến trước khi nó được khai báo
console.log(d); // với biến var nó sẽ là undefined nhưng không báo lỗi
var d = 1;
console.log(e); // ReferenceError: Cannot access 'e' before initialization
let e = 1;

console.log(f); // ReferenceError: Cannot access 'f' before initialization
const f = 1;