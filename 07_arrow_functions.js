//normal function
hello = function() {
    return "Hello World!";
}
//arrow function
hello = () => {
    return "Hello World!";
}
//khi chỉ có 1 câu lệnh và trả về 1 giá trị
hello = () => "Hello World!";
//nếu như có tham số
hello = (val,val2) => "Hello" + val + val2;
//nếu như chỉ có 1 tham số
hello = val => "Hello " + val;
//arrow function giúp rút gọn code, dễ nhìn hơn. Giúp keyword "this" kế thừa giá trị từ khối bên ngoài.
const Cat = function(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
      console.log( this.name + ' says: ' + this.sound );
    };
    this.annoy = function() {
      let count = 0, max = 100;
      const t = setInterval(() => {
        this.makeSound(); // this ở đây vẫn là this của Cat class chứ không chuyển sang global scope ở bên trong setInterval
        count++;
        if (count === max) {
          clearTimeout(t);
        }
      }, 500);
    };
}
const kitty = new Cat('Miu', 'Mrrooowww');
kitty.annoy();