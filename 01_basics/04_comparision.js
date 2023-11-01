/ console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

//we need to avoid this kind of comparision as its output is unpredictable.

console.log(null > 0);    //false
console.log(null == 0);   //false 
console.log(null >= 0);   //true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);