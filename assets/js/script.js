let guessBtn = document.querySelector('.start-button');
let reset = document.querySelector('.reset-button');
let timer = document.querySelector('.timer-text');
let cardWordGuess = document.querySelector('.word-guess')
let secondsLeft = document.querySelector('.timer-count').textContent;


function word () {

    let guessWords = ["variable", "console", "delete", "string", "alert", "prompt", "boolean"]

    let randomNum = Math.floor(Math.random() * 7);
    return guessWords[randomNum]
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        console.log(secondsLeft);
      secondsLeft = parseInt(secondsLeft) - 1;
      timer.textContent = secondsLeft 
        console.log(secondsLeft)
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      };
  
    }, 1000);
}

//   this function holds a message to be displayed when the setTime function is complete 
  function sendMessage() {
      if(answer) {
    cardWordGuess.textContent = "CONGRALUTIONS! YOU WON!";
      }
  };
  

//   invokes the fuction setTime when the button is clicked 
  guessBtn.addEventListener("click", setTime)