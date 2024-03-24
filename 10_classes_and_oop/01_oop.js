const user= {
    username:"vikash",
    countlogin:5,
    SignedIn:true,
    getUserDatails:function(){
        // console.log("user details") 
        // console.log(`username: ${this.username}`) // this keyword is a current context
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDatails());
console.log(this); // pure window ka current context leta h

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);