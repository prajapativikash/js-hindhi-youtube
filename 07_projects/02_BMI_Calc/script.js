const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
     const height = parseInt(document.getElementById('height').value)
    const weight= parseInt(document.getElementById('width').value)
    const result = document.getElementById('result')
if(height===''|| height<0 ||isNaN(height)){
    result.innerHTML = `Please enter the valid input${height}`
    console.log(result)
}else if(weight===''||weight<0 || isNaN(weight)){
    result.innerHTML = `Please enter the valid input${width}`
    
}
else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`
}

})



