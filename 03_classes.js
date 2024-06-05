class Rectangle1 {
    #a=0; //không gọi được từ bên ngoài
    constructor(width, height) {  //khai báo và khởi tạo thuộc tính object
        this.width = width;
        this.height = height; 
        // this._height = height; // dùng "_" thay cho # cho private
    }
    
    get area() {  //get để lấy thuộc tính của class và làm việc với nó
        return this.width * this.height; 
    }
    get a() {
        return this.#a;
    }
    set width(value) { // để gán giá trị cho 1 thuộc tính class
        if (value > 0) {
            this._width = value;
        } else {
            console.error('Width must be a positive number');
        }
    }
    get width() {
        return this._width;
    }
}
class Rectangle2 extends Rectangle1 {  // kế thừa thuộc tính width từ Rectangle1
    constructor(width, height) {
        super(width);
        this.height = height;
    }
    static add(a, b) {  // gọi từ class(không dùng được this và không cần tạo instance của class để dùng)
        return a+b;
    }
    print() { // gọi từ instance(dùng được this để truy cập thuộc tính class và phải tạo instance class trước khi dùng)
        console.log(`${this.width}`);
    }
}
console.log(Rectangle2.add(5, 7)); //thực thi không cần instance
const rect1 = new Rectangle1(5, 10);
console.log(rect1.a);
// console.log(rect1.#a); 
const rect2 = new Rectangle2(10, 5);
rect2.print(); // cần instance
console.log(rect1.area); // Output: 50
rect1.width = 20;
console.log(rect1.area); // Output: 200
