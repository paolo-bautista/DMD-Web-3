let nameInput = document.querySelector('#nameInput')
let submit = document.querySelector('.buttonSubmit') 
let errorMessage = document.querySelector('#error-message') 
let mainMenu = document.querySelector('.main-menu') 
let gameScreen = document.querySelector('.game') 

let userNameDOM = document.querySelector('#userName') 
let computerNameDOM = document.querySelector('#computerName') 

let userChoice = document.querySelector("#userChoice")
let computerChoice = document.querySelector("#computerChoice")

let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")

let rock2 = document.querySelector("#rock2")
let paper2 = document.querySelector("#paper2")
let scissors2 = document.querySelector("#scissors2")

let images = document.querySelector("#images")
let choose = document.querySelector("#choose")
let choose2 = document.querySelector("#choose2")

let decide = document.querySelector("#decide")
let reset = document.querySelector("#reset")
let playAgain = document.querySelector("#playA")

let wins = document.querySelector("#wins")
let losses = document.querySelector("#losses")
let ties = document.querySelector("#ties")

let results2 = document.querySelector("#results")
let update2 =document.querySelector("#score")

let userName = ""
let computerName = ""


let results = {
    wins: 0,
    losses: 0,
    ties: 0
}
function update(){
    results2.style.display = "block"
    wins.innerHTML = `Wins: ${results.wins}`
    losses.innerHTML = `Losses: ${results.losses}`
    ties.innerHTML = `Ties: ${results.ties}`
    update2.style.display = "flex"
    update2.style.gap = "20px"
    update2.style.margin = "10px"

}

function restart() {
    choose.style.display = 'block'
    rock.style.display = "block"
    paper.style.display = "block"
    scissors.style.display = "block"
    userChoice.innerHTML = ""
    images.style.display ="flex"

    rock2.style.display = "none"
    paper2.style.display = "none"
    scissors2.style.display = "none"
    choose2.style.display = "none"
    
    update2.style.display = "none"
}

playAgain.addEventListener('click', () =>{
    restart()
})

reset.addEventListener('click', () => {
    results = {
        wins: 0,
        losses: 0,
        ties: 0
    }
    update()
})

submit.addEventListener('click', (e) => {
    if (nameInput.value === "") {
        e.preventDefault()
        errorMessage.style.display = "block"
      } else {
        userName = nameInput.value
        console.log("You are " + userName)
        mainMenu.style.display = "none"
        gameScreen.style.display = "flex"
        gameScreen.style.flexDirection = "column"
        gameScreen.style.alignItems = "center"


        fetch('https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json')
        .then(response => response.json())
        .then(response => {
            let num = Math.floor(Math.random() * 4)
            computerName = `${response.contacts[num].firstname} ${response.contacts[num].lastname}`
            console.log("VS " + computerName)
            userNameDOM.innerHTML = userName
            computerNameDOM.innerHTML = computerName

            let answers = ["rock", "paper", "scissors", "quit"]
            


            rock.addEventListener('click', (e) => {
                paper.style.display = "none"
                scissors.style.display = 'none'
                choose.style.display = 'none'
                userChoice.innerHTML = 'You choose The Rock!'
                let computer = Math.floor(Math.random() * 3)
                rock.style.display = "none"
                paper.style.display = "none"
                scissors.style.display = "none"

                choose2.style.display = "block"
                if(computer === 0){
                    computer = answers[0]
                    rock2.style.display = "block"
                    paper2.style.display = "none"
                    scissors2.style.display = "none"
                    choose2.innerHTML = "I chose The Rock!"
                } else if (computer === 1){
                    computer = answers[1]
                    paper2.style.display = "block"
                    rock2.style.display = "none"
                    scissors2.style.display = "none"
                    choose2.innerHTML = "I chose Paper!"
                } else if(computer === 2) {
                    computer = answers[2]
                    scissors2.style.display = "block"
                    paper2.style.display = "none"
                    rock2.style.display = "none"
                    choose2.innerHTML = "I chose Mr. Scissors!"
                }

                if(computer === answers[0]){
                    results.ties += 1
                    decide.innerHTML = "We Tie..."
                }else if(computer === answers[1]){
                    results.losses += 1
                    decide.innerHTML = "I Win :D"
                } else if (computer === answers[2]) {
                    results.wins += 1
                    decide.innerHTML = "I lose :("
                }
                update()
            })
                    
            paper.addEventListener('click', (e) => {
                rock.style.display = "none"
                scissors.style.display = 'none'
                choose.style.display = 'none'
                userChoice.innerHTML = 'You choose Paper!'
                let computer = Math.floor(Math.random() * 3)
                rock.style.display = "none"
                paper.style.display = "none"
                scissors.style.display = "none"

                choose2.style.display = "block"

                if(computer === 0){
                    computer = answers[0]
                    rock2.style.display = "block"
                    paper2.style.display = "none"
                    scissors2.style.display = "none"
                    choose2.innerHTML = "I chose The Rock!"
                } else if (computer === 1){
                    computer = answers[1]
                    paper2.style.display = "block"
                    rock2.style.display = "none"
                    scissors2.style.display = "none"
                    choose2.innerHTML = "I chose Paper!"
                } else if(computer === 2) {
                    computer = answers[2]
                    scissors2.style.display = "block"
                    paper2.style.display = "none"
                    rock2.style.display = "none"
                    choose2.innerHTML = "I chose Mr. Scissors!"
                }

                if(computer === answers[0]){
                    results.wins += 1
                    decide.innerHTML = "I lose :("
                }else if(computer === answers[1]){
                    results.ties += 1
                    decide.innerHTML = "We Tie..."
                } else if (computer === answers[2]) {
                    results.losses += 1
                    decide.innerHTML = "I Win :D "
                }
                update()
            })
            scissors.addEventListener('click', (e) => {
                paper.style.display = "none"
                rock.style.display = 'none'
                choose.style.display = 'none'
                userChoice.innerHTML = 'You choose Mr. Scissors!'
                let computer = Math.floor(Math.random() * 3)

                rock.style.display = "none"
                paper.style.display = "none"
                scissors.style.display = "none"

                choose2.style.display = "block"

                if(computer === 0){
                    computer = answers[0]
                    rock2.style.display = "block"
                    paper2.style.display = "none"
                    scissors2.style.display = "none"
                    choose2.innerHTML = "I chose The Rock!"
                } else if (computer === 1){
                    computer = answers[1]
                    paper2.style.display = "block"
                    rock2.style.display = "none"
                    scissors2.style.display = "none"
                    choose2.innerHTML = "I chose Paper!"
                } else if(computer === 2) {
                    computer = answers[2]
                    scissors2.style.display = "block"
                    paper2.style.display = "none"
                    rock2.style.display = "none"
                    choose2.innerHTML = "I chose Mr. Scissors!"
                }

                if(computer === answers[0]){
                    results.losses += 1
                    decide.innerHTML = "I Win :D"
                }else if(computer === answers[1]){
                    results.wins += 1
                    decide.innerHTML = "I lose :("
                } else if (computer === answers[2]) {
                    results.ties += 1
                    decide.innerHTML = "We Tie..."
                }
                update()
            })
        })
    }
})
