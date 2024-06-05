//for: lặp với điều kiện đúng
for (expression 1; expression 2; expression 3) {
    // code block to be executed
  }
for (let i=0;i<=5;i++){
    console.log(i);
}
//for ... in : lặp qua key của đối tượng
let string = "javascript";
for (let i in string){
    console.log(string[i]);
}
//for ... of : lặp qua value của đối tượng
let string1 = "javascript";
for (let i of string1){
    console.log(i);
}
// while : lặp khi điều kiện đúng
let array = ["js", "python", "java"];
let i=0;
while(i<array.length){
    console.log(array[i]);
    i++;
}
// do ... while : chạy 1 lần rồi lặp khi đúng điều kiện 
let a=0;
do{
    console.log(a);
}while(a>0);
//break
let string2 = "javascript";
for (let i in string2){
    console.log(string2[i]);
    if(i==5){
        break;
    }
}
//continue
let string3 = "javascript";
for (let i in string3){
    if(i>4){
        continue;
    }
    console.log(string3[i]);
}