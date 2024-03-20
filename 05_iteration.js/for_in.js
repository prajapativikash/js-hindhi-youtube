// for in loop

const myobject = {
    js:"javascript",
    rb:"rubby",
    py:"python"
}

for(const key in myobject){
    // console.log(key);// only display key


    // console.log(`${key} is shoortcut is for ${myobject[key]}`);
}


const programming = ['js','rb','py','java']

for(const key in programming){
  console.log(key); // return the array of key
  console.log(programming[key]);
}