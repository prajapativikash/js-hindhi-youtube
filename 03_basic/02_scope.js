//  this is a global scope
{
    // this is a block a scope
}

let a = 300 // this is a global scope
if (true) {
    let a = 10 // this is a local scope
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    username = "vikash";

    function two(){
        const website = "google.com"
        console.log(username)
    }

    // console.log(website) // error because this is variable is acces a local or block scope
    two()
}
one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)// this is variable holde of the function error provide
const addTwo = function(num){
    return num + 2
}