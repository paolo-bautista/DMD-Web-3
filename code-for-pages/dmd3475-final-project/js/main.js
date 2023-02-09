const quote_api = 'https://api.quotable.io/random?minLength=160&maxLength=200'
const quoteDisplay = document.querySelector('#quoteDisplay')
const authorDisplay = document.querySelector('#authorDisplay')
const quoteInput = document.querySelector('#quoteInput')
const nextButton = document.querySelector('#nextButton')
const incorrectEntry = document.querySelector('#incorrectEntry')
const timer = document.querySelector('#timer')
const wpm = document.querySelector('#wpm')
const startButton = document.querySelector('#mainButton')
const mainMenu = document.querySelector('#main-menu')
let timerStart = false;
let startTime
let time = 60
let count = 5

// wpm counter variable
let topScore;

// Current quote information, as globals
let quote, authorName, quoteLength;

// Use this to flag typing errors
let typingError = false

// Key presses in this array will be ignored
const badKeys = [
  "Enter",
  "Delete"
]
quoteInput.readOnly = true;

quoteInput.addEventListener('keydown', (event) => {

  // Disable  "bad" keys
  if(badKeys.indexOf(event.key) !== -1){
    console.error('"' + event.key + '" key is not allowed. Ignoring input.')
    event.preventDefault();
  }

  // Or if there's a mistake
  if(typingError === true && event.key !== 'Backspace'){
    // Disable further typing
    event.preventDefault();
  }
})

quoteInput.addEventListener('input', (event) => {
    console.log(event)

      const arrayQuote = quoteDisplay.querySelectorAll('span')
      const arrayValue = quoteInput.value.split('')
      let finished = true;
      
      arrayQuote.forEach((charSpan, index) => {
        if(typingError !== true || event.inputType == 'deleteContentBackward'){
          const character = arrayValue[index]
          if (character == null) {
              charSpan.classList.remove('correct')
              charSpan.classList.remove('incorrect')
              typingError = false;
              finished = false;
          } else if (character === charSpan.innerText) {
              charSpan.classList.add('correct')
              charSpan.classList.remove('incorrect')
              typingError = false;
          } else {
              charSpan.classList.add('incorrect')
              charSpan.classList.remove('correct')
              typingError = true
              finished = false;
              console.log('error', typingError, window.typingError)
          }
        }
      })
      if(finished) {
        quoteInput.readOnly = true;
        timerStart = false;
    }
  })


startButton.addEventListener('click', () => {
  document.querySelector('#nextButton').style.display = "none";
  mainMenu.style.display = "none";
  startButton.style.display = "none";
  document.querySelector('.container').style.display = "block";
  getNextQuote()
  quoteInput.focus();
})
nextButton.addEventListener('click', () => {
    getNextQuote()
    document.querySelector('#nextButton').style.display = "none";
    document.querySelector('#countdown').style.display = "block";
    document.querySelector('#finalScoreDiv').style.display = "none";
    quoteInput.focus();
})

function getRandomQuote() {
    return fetch(quote_api)
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
          console.log(error)
        })
}

// These functions are redundant. We can get everything from `getRandomQuote`
//
// function getAuthorName(){
//     return fetch(quote_api)
//         .then(response => response.json())
//         .then(data => data.author)
// }
// function getQuoteLength(){
//     return fetch(quote_api)
//         .then(response => response.json())
//         .then(data => data.length)
// }

async function getNextQuote () {
    // Gets the quote, author, and length
    // See for info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
    ({ content: quote, author: authorName, length: quoteLength } = await getRandomQuote())
    console.log(quote, authorName, quoteLength)

    quoteDisplay.innerHTML = ''
    quote.split('').forEach(character => {
        const charSpan = document.createElement('span')
        charSpan.innerText = character
        quoteDisplay.appendChild(charSpan)
    })
    authorDisplay.innerHTML = " -" + authorName
    quoteInput.value = null;
    timerStart = true;
    count = 5;
    time = 60;
    startTimer()
}


function startTimer() {
    timer.innerText = 0

    let interval = setInterval(() =>{
        if (timerStart) {
            if (count > 0) {
                console.log(count);
                document.querySelector('#countdown').innerText = "TIME TO START: " + count
                count--;
                quoteInput.readOnly = true;
                document.querySelector('#countdown').style.color = "white"
                if (count == 2) {
                  document.querySelector('#countdown').style.color = "red"
                } else if (count == 1) {
                  document.querySelector('#countdown').style.color = "yellow"
                } else if (count == 0) {
                  document.querySelector('#countdown').style.color = "green"
                }
            }
            else {
                console.log('Running else (code below) on time interval')
                document.querySelector('#countdown').style.display = "none";
                timer.style.display = "block";
                quoteInput.readOnly = false;
                    if (time > 0) {
                        timer.innerText = time;
                        time--;
                        console.log(time)
                    } else {
                      clearInterval(interval)
                      console.log("Interval finished")
                      topScore = (quoteLength / 5)
                      document.querySelector('#wpm').innerText = "Words Per Minute: " + Math.round(topScore);
                      document.querySelector('#length').innerText = "Quote Length: " + quoteLength;
                      document.querySelector('#timeLeft').innerText = "Seconds Taken to Complete: " + (60 -             time);
                      document.querySelector('#nextButton').style.display = "block";
                      document.querySelector('#finalScoreDiv').style.display = "flex";
                    }
            }
        } else {
          time = time + 1
          clearInterval(interval)
          console.log("Interval finished")
          topScore = (quoteLength / 5) / ((60 - time) / 60);
          document.querySelector('#wpm').innerText = "Words Per Minute: " + Math.round(topScore);
          document.querySelector('#length').innerText = "Quote Length: " + quoteLength;
          document.querySelector('#timeLeft').innerText = "Seconds Taken to Complete: " + (60 - time);
          document.querySelector('#nextButton').style.display = "block";
          document.querySelector('#finalScoreDiv').style.display = "flex";
        }
    }, 1000);
    
}



