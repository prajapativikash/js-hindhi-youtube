//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100  //
console.log( typeof score) // number
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack(Primitive) Heap(non Primitive)
// stack => stack may original value ki copy di jati h jisese origanla value per koi effect nahi padata h
let myname = "vikash";
anotherName = myname;
anotherName = "vikash prajapati"
console.log(myname)
console.log(anotherName)

// heap=> heap may reference diya jata h origanal value ko jises orignal value bhi change ho jat ah if reference ko change karate h tab

const user1= {
    name:"vikash",
    age:23
}

const user2= user1;
user2.name = "vikash prajapati";
console.log(user1)
console.log(user2);