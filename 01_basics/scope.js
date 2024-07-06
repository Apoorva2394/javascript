let a=1;
const b=2;
var c=3;

console.log(a);
console.log(b);
console.log(c);
addone(8) 
function addone(n){
    return n+1
}
addone(7)//can access anywhere
//addtwo(6) //con not access before declaration
const addtwo=function(n){
    return n+2
}
addtwo(4)
//++++++++++++++++++ use of arrow function ++++++++++++++++++++++++++
const one=(n1,n2)=>{ //explicit
    return n1+n2
}

const two=(n1,n2) =>  (n1 + n2) //implicit

console.log(one(4,5));
console.log(two(6,7));

//IIFE immediately invoked function expression used when global scope ke pollution se problem hoti ha so uske pollution ko remove krne ke liye..
(function chail(){
    //named IIFE
    console.log('DB CONNECTED');
})();

((name)=>{
    //unnamed IIFE
    console.log('DB CONNEECTED AGAIN ${name}');
})('Apoorva')

