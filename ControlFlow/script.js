// == vs ===  -> important!!!
// == type coercion

true == "1" //true
0 == false //true
null == undefined //true
NaN == NaN //false

//Exercise 1
var x= 10;
var y ="a";

y ==="b" || x >= 10 //true

//Exercise 2
var x= 3;
var y = 8;

!(x == "3" || x === y) && !(y !=8 && x <=y) //false -> short circuit 

x == "3" || **** //left side is true in OR statement -> true , short circuiting


//Truthy and Falsy Values
//Falsy Values:
// false, 0, "", null, undefined, NaN
//Everything else is Truthy