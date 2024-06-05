//  hàm truyền vào hàm khác như 1 đối số gọi bên trong hàm đó để hoàn thành một số thao tác hoặc sau khi một sự kiện nào đó xảy ra.
hello("bao",goodbye);
function hello(person,callback){
    console.log(`hello ${person}`);
    callback();
}
function goodbye(){
    console.log("goodbye");
}
// callback với các hàm xử lý sự kiện
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
// hoặc không dùng hàm anonymous 
function handleClick() {
    alert("Button clicked!");
}
document.getElementById("myButton").addEventListener("click", handleClick);
// 1 ví dụ khác là trong các hàm bất đồng bộ như setTimeout hoặc setInterval
setTimeout(function() {
    console.log("This is a callback after 2 seconds");
}, 2000);
// khi lồng quá nhiều callback sẽ gây ra callback hell
doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
        doAnotherThing(newResult, function(finalResult) {
            console.log("Final result: " + finalResult);
        });
    });
});