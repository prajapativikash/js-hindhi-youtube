// generate random color

const body = document.querySelector('body')
const starButton = document.getElementById('start')
const stopButton = document.getElementById('stop')

function randomColor(){
    const hex = "0123456789ABCDEF"
    let  color = '#'
    for(let i =0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
console.log(randomColor()) 

let IntervalId;

function startChangeBackgroundColor(){
if(!IntervalId){
  IntervalId = setInterval(BgChange,1000)
   console.log(IntervalId);

}
function BgChange(){
   document.body.style.backgroundColor = randomColor()

}
}
function StopChangeBackgroundColor(){
    clearInterval(IntervalId)
    IntervalId = null;

}
starButton.addEventListener('click',startChangeBackgroundColor)
stopButton.addEventListener('click',StopChangeBackgroundColor)



