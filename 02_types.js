//dữ liệu nguyên thuỷ:không phải là 1 object, không có phương thức, thuộc tính
// Numbers
console.log(typeof(5));
console.log(typeof(3.3));
// Strings
console.log(typeof("code"));
// Booleans
console.log(typeof(true));
//undefined
console.log(typeof(x));
//null
let y = null;
console.log(typeof(y));
null === undefined;  // false
null == undefined;   // true
//bigint
console.log(typeof(1234n));
//symbol:Symbol là duy nhất. Dù bạn có tạo ra các symbol với cùng description thì chúng vẫn khác nhau.
console.log(typeof(Symbol("abc")));

//dữ liệu dạng object
//object:key ở dạng string
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(typeof(person));
//array
let numbers = [1, 2, 3, 4, 5];
console.log(typeof(numbers));
//date
let now = new Date();
console.log(typeof(now));
//map:key có thể là mọi loại data type
let map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(typeof(map));
//set: dữ liệu không trùng nhau
let set = new Set();
set.add(1);
set.add(2);
console.log(typeof(set));
//weakmap: key phải là object, nếu không có reference đến thì có thể giải phóng bộ nhớ
//, không dùng được các hàm duyệt như key(), value(), entries() và không thể duyệt qua.
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'value');
console.log(typeof(weakMap));
//weakset: key phải là object, nếu không có reference đến thì có thể giải phóng bộ nhớ,
//không dùng được size.
let weakSet = new WeakSet();
let obj1 = {};
weakSet.add(obj1);
console.log(typeof(weakSet));