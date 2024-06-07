function b() {
    "use strict";
    this.a = 2; // TypeError: Cannot set properties of undefined (setting 'a')
}
b();
console.log(a);