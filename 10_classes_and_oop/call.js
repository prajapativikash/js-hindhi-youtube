function SetUser(username){
    // comples DB is connected
    this.username = username
    console.log('called')

}

function CreateUser(username,email,password){
    SetUser.call(this,username) // one function to anothe function in value pass this key word and argument
    this.email = email
    this.password = password
}

let chai = new CreateUser("chai","chai@gb.com",'123')
console.log(chai)