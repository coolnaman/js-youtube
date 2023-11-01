let score = "33";
let scoreS = "33ab";

// console.log(typeof(score));
// console.log(typeof(scoreS));

let converter = Number(score);
let converterS = Number(scoreS);

//console.log(converterS);   //{NaN}

// console.log(typeof(converter));
// console.log(typeof(converterS));


/*
 "33" == 33
 "33abc" == NaN
  true= 1 , false = 0;
*/

let someNumber = 33

let stringSomeNumber = String(someNumber);
// console.log(stringSomeNumber);       33
// console.log(typeof stringSomeNumber);    string


// *******   Operations  ******* //

let value= 3;
let negValue = -value;
// console.log(negValue);  -3

// console.log("1" + 2 + 4);   124
// console.log(2 + 4 + "1"); 61

// console.log(+true);   1      console.log(true+);   error
// console.log(+"");     0

// let num1 , num2 , num3;

// num1 = num2 = num3 = 2 + 2;

/* Prefix & Postfix

let x = 3; const y = x++; 
console.log(`x:${x}, y:${y}`); 
// Expected output: "x:4, y:3" 

let a = 3; const b = ++a; 
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

*/