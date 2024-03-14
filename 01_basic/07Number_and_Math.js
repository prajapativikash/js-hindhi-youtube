// Number

const number = 100; // direct define the number
console.log(number)

const balance  = new Number(200) // Number is return a object 

console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(3));// ye decimal ke bad 3 zero add kar deta h



//Math

console.log(Math.abs(-3)); //abs() ye negative sign ko positive value may change kar deta h

console.log(Math.round(4.4));// .5 se value jayda hone per ye value ko 1 increase kar deta h

console.log(Math.ceil(4.5)); // ye top value ko lete h value // ye value ko 1 increase kar deta agar point laga h 

console.log(Math.floor(3.9));// ye minimum value ko leta h 

console.log(Math.random());// ye random value ko generate karta h iska rage 0-1 hota h

 console.log(Math.min(4, 3, 6, 8));
 console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// (max-min) range ko pata karane ke liye karate h  and 1 zero ko htne ke liye karate h



