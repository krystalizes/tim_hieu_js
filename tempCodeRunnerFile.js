hello("bao",goodbye);
function hello(person,callback){
    console.log(`hello ${person}`);
    callback();
}
function goodbye(){
    console.log("goodbye");
}