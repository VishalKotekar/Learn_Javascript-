let randomNumber = Math.floor(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.getElementsByClassName('resultParas')[0];//here we have selected class using className so HtmlCollection is got so we have included[0] node

let p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    //we checked that the user is availaible to play the game and then we get
    //the value from input and then we passed it to validGuess function for further check.
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)  
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //checked the value is not empty and more than 0 and less than 101
   if (isNaN(guess)) {
        alert("Enter a Valid Number")
   } else if (guess < 1) {
        alert("Enter a Number more than 0")
   }else if(guess > 100){
        alert("Enter a number less than 101")
   }
   else{
    // we pushed the previously guessed values into an preveGuess Array 
        prevGuess.push(guess)
        if(numGuess > 10){
            displayGuess(guess)//displayed the previous guessed values
            displayMessage(`Game Over, Random Number Was ${randomNumber}`)//the game is over that's why we showed the random number to user
            endGame()
        }
        else{
            displayGuess(guess)//we want display the previously guessed numbers from displayGuess function
            checkGuess(guess)//we passed guessed no to checkGuess fun for checking guessed no and random no is equal or not
        }
    }
}

function checkGuess(guess){
    //checking the random number is equal to guessed no or not
    if (guess === randomNumber) {
        displayMessage("You Guessed it Right And You Won The Game")
        endGame()
    }else if(guess < randomNumber){
        displayMessage("You Entered Number is Too Low")
    }else if(guess > randomNumber){
        displayMessage("You Entered Number is Too High")
    }
}

function displayGuess(guess){
    userInput.value = ''    //clean up the value from user input
    guessSlot.innerHTML += `${guess}, ` //displayed the previous guesses to user
    numGuess++;                         //increased the number of guesses
    remaining.innerHTML = `${11 - numGuess}` //displayed remaining attempts to the user
}

function displayMessage(Message){
    lowOrHi.innerHTML = `<h2>${Message}</h2>`; //displayed all the messages in one place in h2 format
}

function endGame() {
    userInput.value = '';//we are cleanedthe user input
    userInput.setAttribute('disabled', '');//we disabled the input for user to enter the value
    p.classList.add('button')//created class button
    p.innerHTML=`<h2 id = "newGame">Start The New Game</h2>` 
    startOver.appendChild(p) 
    playGame = false;
    newGame()
}

function newGame(){
    const newGameButton = document.getElementById('newGame')//selected p and added eventListner
    newGameButton.addEventListener('click', function(e) {
        randomNumber = Math.floor(Math.random()*100+1);//clean up all the variables values
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML= '';
        remaining.innerHTML = `${11 - numGuess}` ;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame =true;//so on you can play the new game now!!
    })


}

