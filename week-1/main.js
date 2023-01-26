// Initialize button to grab from html
button = document.querySelector("button")

// Create object to cache result
let results = {
    wins: 0,
    losses: 0,
    ties: 0
}

// Initalize main game
function game(){
    // Initialize prompt
    let question = prompt("Young padawan... rock, paper, scissors, or quit?")

    // Initialize array access specific string
    let answers = ["rock", "paper", "scissors", "quit"]
    
    // For exit
    if(question === answers[3]){
        return console.log(results)
    }
        
    // Generate game for player to go against randomly from 0-2
    let computer = Math.floor(Math.random() * 3)
    // Takes the result and attaches it to corresponding array
    if(computer === 0){
        computer = answers[0]
        console.log("I chose rock!")
    } else if (computer === 1){
        computer = answers[1]
        console.log("I chose paper!")
    } else if(computer === 2) {
        computer = answers[2]
        console.log("I chose scissors!")
    }

    // Compare user input to computer followed by subsequent comparisons. Each loop updating the results and logging each event.
    if(question === answers[0]){
        if(computer === answers[1]){
            console.log(`You chose ${question}. I win!`)
            results.losses += 1
        }else if(computer === answers[2]) {
            console.log(`You chose ${question}. I lose!`)
            results.wins += 1
        } else {
            console.log(`You chose ${question}. It's a tie!`)
            results.ties += 1
        }
    } else if(question === answers[1]){
        if(computer === answers[2]){
            console.log(`You chose ${question}. I win!`)
            results.losses += 1
        }else if(computer === answers[0]) {
            console.log(`You chose ${question}. I lose!`)
            results.wins += 1
        }else {
            console.log(`You chose ${question}. It's a tie!`)
            results.ties += 1
        }
    } else if(question === answers[2]){
        if(computer === answers[0]){
            console.log(`You chose ${question}. I win!`)
            results.losses += 1
        }else if(computer === answers[1]) {
            console.log(`You chose ${question}. I lose!`)
            results.wins += 1
        } else {
            console.log(`You chose ${question}. It's a tie!`)
            results.ties += 1
        }
    }
    // Display results
    console.log(`You currently have ${results.wins} wins, ${results.ties} ties, and ${results.losses} losses.`)

    // Reset game
    game()
}

// Add the click listener to button to start game
button.addEventListener("click", function() {
    game()
})