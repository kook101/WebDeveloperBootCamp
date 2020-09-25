//Dry: don't repeat yourself
//We want to keep our code as DRY as possible.

//While loops
// Repeat code while a condition is true
// while(some condtition) { run some code }
// always becarefule infinite loop

//var num = 1;
// while( num <= 10){
//     console.log(num);
//     num += 2;
// }

var num = 1;
while(num <= 20) {
    if(num % 4 === 0 ){
        console.log(num);
    }
    num++;
}

//1. print all numbers between -10 and 19
var num = -10;
while (num<20) {
    console.log(num)
    num++;
}

//2. print all even numbers between 10 and 40
var num = 10;
while (num<=40){
    console.log(num);
    num += 2;
}


// var num = 10;
// while (num<=40){
//     if(num % 2 === 0 ){
//         console.log(num);
//     }
//    num += 1;
// }



//3. print all odd numbers between 300 and 333
var num =300;

while (num<=333){
    if(num % 2 !== 0 ){
        console.log(num);
    }
   num += 1;
}



//4. print all numbers divisible by 5 AND 3 between 5 and 50
var num = 5;
while(num<51){
    if(num % 5 === 0 && num % 3 === 0){
        console.log(num);
    }
    num++;
}