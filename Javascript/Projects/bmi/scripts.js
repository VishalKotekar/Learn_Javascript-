const form = document.querySelector('form')


form.addEventListener('submit',function(e) {
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector('#result')
    const h3 = document.querySelector('h3')
    e.preventDefault()
    if(height==""||height<0||isNaN(height)){
        result.innerHTML="Enter Valid Height";
    }else if(weight==""||weight<0||isNaN(weight)){
        result.innerHTML="Enter Valid Weight";
    }
    const formula = ( weight / ((height*height) / 10000)).toFixed(2);
  
    // result.innerHTML = `<span>${formula}<span>`
    const bmi = document.createTextNode(formula)
    result.appendChild(bmi)
    if (formula<18.6) {
        h3.innerHTML="You're in Under Weight!!";
    }else if (formula>=18.6) {
        h3.innerHTML="You're in Normal range!!";
    }else if (formula>24.9) {
        h3.innerHTML="You're in Over Weight!!";
    }
    
})

