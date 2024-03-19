// for of loop

const arr = [1,2,3,40];

for(let num of arr){
    // console.log(num);
}


const greeting = "hello world"

for( const greet of greeting){
    console.log(`Each character ${greet}`);
}

// map -> object hold key value pair unique value store

const map = new Map();

map.set('IN',"India")
map.set("USA","unites state of America")
map.set("fr","france")

for(const [key,value] of map){
    console.log(key, "-:", value);
}

