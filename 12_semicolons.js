// dấu chấm phẩy dùng khi kết thúc 1 câu lệnh
// Javascript có tính năng tự động thêm dâu chấm phẩy, nhưng vài trường hợp nó sẽ không thêm và gây ra lỗi
// return: js sẽ tự thêm ; vào sau chữ return vậy nên log sẽ ra undefined => nên viết giá trị muốn return cùng dòng với return
function getValue() {
    return 
    {
        value: 42
    };
}

console.log(getValue()); // undefined

function getValue1() {
    return {
        value: 42
    };
}
console.log(getValue1()); // { value: 42 }
// khi kí tự bắt đầu dòng code tiếp theo không phá huỷ dòng code trước đó( thường là bắt đầu bằng "[" hoặc "(" )
const hey = 'hey'
const you = 'you'
const heyYou = hey + ' ' + you
['h', 'e', 'y'].forEach((letter) => console.log(letter))
// const heyYou = hey + ' ' + you['h', 'e', 'y'].forEach((letter) => console.log(letter))

const a = 1
const b = 2
const c = a + b
(a + b).toString()
// const c = a + b(a + b).toString()