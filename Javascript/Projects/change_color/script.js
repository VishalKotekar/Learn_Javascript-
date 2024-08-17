const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click',function (e)
    {
        //with if else method
    //   if (e.target.id === 'grey') {
    //     body.style.backgroundColor = e.target.id
    //   }  
    //   if (e.target.id === 'white') {
    //     body.style.backgroundColor = e.target.id
    //   }  
    //   if (e.target.id === 'blue') {
    //     body.style.backgroundColor = e.target.id
    //   }  
    //   if (e.target.id === 'yellow') {
    //     body.style.backgroundColor = e.target.id
    //   }  
    //with if method
    switch (e.target.id) {
        case 'grey':
            body.style.backgroundColor = 'grey'
            break;
        case 'white':
            body.style.backgroundColor = 'white'
            break;
        case 'blue':
            body.style.backgroundColor = 'blue'
            break;
        case 'yellow':
            body.style.backgroundColor = 'yellow'
            break;
        case 'purple':
            body.style.backgroundColor = 'purple'
            break;
    
        default:
            break;
    }
    })
    
})