// global scope
let a = 0;
(function(){
    console.log(a); // 0
}()); 
// code block scope : let, const
{
    let a = 0;
}
console.log(a); // ReferenceError: a is not defined
{
    var b = 0;
}
console.log(b); // 0
// local scope : var, function
(function myFunction() {
    let a = 0;
    console.log(a); // 0
}());
console.log(a); // ReferenceError: a is not defined
// hàm có thể truy cập biến được khai báo trong phạm vi của nó và bên ngoài nó.