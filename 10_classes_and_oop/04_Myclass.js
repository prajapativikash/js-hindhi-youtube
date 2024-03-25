// class user{
//     constructor(username,email,password){
//         this.username= username
//         this.email= email
//         this.password = password
//     }
//     encrptpassword(){  // this is a meathode

//         console.log(`${this.password}abc`)
//     }

//     }

//     let chai =  new user('vikash','vikash@gmail.com','123')

//     console.log(chai.encrptpassword())

// behind the scene upper class is work kaise kar raha h

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());