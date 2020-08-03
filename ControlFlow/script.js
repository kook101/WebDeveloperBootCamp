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

x == "3" || x === y //left side is true in OR statement -> true , short circuiting


//Truthy and Falsy Values
//Falsy Values:
// false, 0, "", null, undefined, NaN
//Everything else is Truthy

var str = " "
var msg = "haha!"
var isFunny = "false"

!((str||msg) && isFunny) //false


//JS Conditional
// if(age <18){
//     console.log("Sorry, you are not old enough to enter the venue.");

// } 

// else if( age < 21) {
//     console.log("You can enter, but cannot drink.");
// }

// else {
//     console.log("Come on in. You can drink.");
// }

// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));
while(isNaN(age)){
    age = Number(prompt("What is your age?"));
}


// If age is negative
if(age < 0){
    console.log("Come back once you're out of the womb");
}

// If age is 21
if(age === 21) {
    console.log("Happy 21st Birthday!");
}

// If age is odd
//(not evenly divisible by two)
if(age % 2 !==0 ) {
    console.log("Your age is odd!");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
  }