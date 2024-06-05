function name(parameter1, parameter2, parameter3) { //1 khối mã làm 1 việc cụ thể, chạy khi được gọi, có thể nhận tham số và trả về giá trị
    // code to be executed
  }
//khai báo hàm
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice')); // "Hello, Alice!"
//function expression: gán vào biến
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet('Bob')); // "Hello, Bob!"
//arrow function: rút gọn hàm
hello = () => {
    return "Hello World!";
  }
//anonymous function: không có tên
var greet = function () { 
    console.log("Hello"); 
}; 
greet();
//IIFE: hàm chạy ngay lập tức
(function() {
    console.log('Hello');
})();
//callback: truyền 1 hàm vào 1 hàm khác như 1 tham số
function fetchData(callback) {
    setTimeout(() => {
        callback('Data received');
    }, 1000);
}
fetchData(data => {
    console.log(data); // "Data received"
});