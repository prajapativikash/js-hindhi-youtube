const button = document.querySelectorAll('.btn');
const body = document.querySelector('body');
button.forEach((button)=>{
    console.log(button)
    button.addEventListener('click',function(e){
        // console.log(e)
        // console.log(e.target)
        if(e.target.id ==="gray"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==="red"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==="green"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==="yellow"){
            body.style.backgroundColor = e.target.id;
        }
    })
})

