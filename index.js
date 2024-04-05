const cpuChoices = ["rock", "paper", "scissors"]

function playGame() {
   const playerPoints = 0
   const cpuPoints = 0
   const rounds = 0
   if (rounds == 5) {
      console.log("GAME OVER!")
   }
}

function getComputerChoice () {
   cpuTurn =  Math.floor(Math.random() * 3)
   const computerChoice = cpuChoices[cpuTurn]
   return computerChoice
}

const playerChoice = "rock"
const computerChoice = getComputerChoice();

function playRound(playerChoice, computerChoice) {
         player = playerChoice.toLowerCase()
         cpu = computerChoice.toLowerCase()
         if (player === cpu) {
            console.log("Tie! No one wins!")
         } else if (player === "rock") {
            if (cpu === "scissors") {
            console.log("Player wins! Rock beats scissors!")
          } else {
            console.log("CPU wins! Paper beats rock!")
          }
         } else if (player === "paper") {
            if (cpu === "rock") {
            console.log("Player wins! Paper beats rock!")
          } else {
            console.log("CPU wins! Scissors beats paper!")
          } 
         } else if (player === "scissors") {
            if (cpu === "paper") {
            console.log("Player wins! Scissors beats paper!")
          } else {
            console.log("CPU wins! Rock beats scissors!")
          } 
}
}

console.log(computerChoice)

console.log(playRound(playerChoice, computerChoice))