// in object
let person = {
    name: "Alice",
    greet: function() {
      console.log("Hi, my name is " + this.name);
    }
};
person.greet();
// in global scope
function foo() {
    this.a = 2;
}
foo();
console.log(a);
// in global scope strict
function b() {
    "use strict";
    this.a = 2; // TypeError: Cannot set properties of undefined (setting 'a')
}
b();
console.log(a);
// aplly, call, bind
const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
  
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
} 
// This will return "Mary Doe":
person.fullName.apply(person2);
//person.fullName.call(person2);
//person.fullName.bind(person2);

//event 
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>