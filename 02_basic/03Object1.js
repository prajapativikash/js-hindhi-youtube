const mysm= Symbol("prajapati")

const jsUser= {
    name:"vikash",
    "full name":"vikash prajapati",
    [mysm]:'mykey1',
    age:12,
    email:"vikash@google.com",
    islogged:"true"
}
// console.log( typeof jsUser[mysm]);
// console.log(jsUser.age);
// console.log(jsUser['name']);
// console.log(jsUser['full name']);
// console.log(jsUser[name]);// itis acces by string
console.log(jsUser['email']);// this coorect meathode

// change the Object of the property
jsUser.email = "vikp123@gmail.com"
console.log(jsUser);

// freee the value ibject value are not change 

// Object.freeze(jsUser)
jsUser.name = "vikash kumar prajapati"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("js user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello user ${this["full name"]}`);  // this keyword se sare properties nikal lete h `` ko string Interpulation kahte h
}


// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo());

console.log(this.jsUser)