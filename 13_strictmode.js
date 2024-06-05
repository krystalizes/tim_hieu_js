// khi khai báo ở đầu, trước các dòng code khác thì sẽ là global scope
// khi khai báo trong function thì sẽ là local scope trong function
"use strict";
x = 2; // lỗi vì x chưa được khai báo

x = 3.14;       // không lỗi
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // có lỗi
}
// không được đặt tên tham số trùng
"use strict";
function x(p1, p1) {};
// không được gán giá trị cho các thuộc tính read only
"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14; 
// không được dùng các từ khoá được bảo lưu để làm biến
"use strict";
let public = 1500;
// không được xoá các thuộc tính không thể xoá
"use strict";
delete Object.prototype;
// this trong strict mode
"use strict";
console.log(this); // sẽ trả về đối tượng global là window
(function myFunction() {
  console.log(this); // "undefined"
}())
// with không dùng được trong strict mode
"use strict";
with (Math){x = cos(2)};