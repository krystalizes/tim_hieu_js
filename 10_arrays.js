// khai báo mảng 
let arr1 = []; // Mảng rỗng
let arr2 = [1, 2, 3]; 
let arr3 = new Array(1,2,3,null,undefined,function(){},{}); // phần tử mảng có thể là bất cứ cái gì
let arr4 = new Array(1,2,3);
// truy cập mảng
console.log(arr2[0]); 
// thay đổi phần tử mảng
arr2[1] = 4;
console.log(arr2); // [1, 4, 3]
// thêm và bỏ phần tử
arr2.push(4); // [1, 2, 3, 4]
console.log(arr2); 
arr2.pop(); // [1, 2, 3]
console.log(arr2); 
arr2.unshift(0); // [0, 1, 2, 3]
console.log(arr2); 
arr2.shift(); // [1, 2, 3]
console.log(arr2); 
console.log(arr2.length) // 3
// duyêt mảng
arr2.forEach((element, index) => {
    console.log(index, element);
});
console.log(typeof arr4); // array là 1 object
// // tạo mảng mới bằng cách biến đổi các phần tử cũ qua 1 hàm
// let mappedArr = arr4.map(x => Math.pow(x,2)); // [1, 4, 9]
// console.log(mappedArr);
// // tạo mảng mới bằng cách lọc các phần tử cũ qua điều kiện
// let filteredArr = arr4.filter(x => x > 1); // [2, 3]
// console.log(filteredArr);
// // trả về 1 kết quả duy nhất sau khi thực hiện tính toán giữa các phần tử của mảng
// let reducedValue = arr4.reduce((acc, curr) => acc + curr); // 6
// console.log(reducedValue);
// // trả về chỉ số đầu tiên tìm thấy 
// console.log(arr4.indexOf(2)); // 1
// // tìm kiếm phần tử trong mảng
// console.log(arr4.includes(2)); // true
// // sắp xếp mảng
// arr1 = [3, 1, 2];
// console.log(arr1.sort()); // [1, 2, 3]
// console.log(arr1.reverse()); // [3, 2, 1]
// // ghép phần tử mảng thành string 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString()); // Banana,Orange,Apple,Mango
// console.log(fruits.join("*"));  // Banana*Orange*Apple*Mango(có thể quyết định kí tự chia cách)