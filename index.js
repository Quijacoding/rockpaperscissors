const cpuChoices = ["rock", "paper", "scissors"]
let player = ""
let playerPoints = 0
let cpuPoints = 0
let rounds = 0

const score = document.querySelector("#score")
score.textContent = "?"

const p1score = document.querySelector("#p1-score")
const cpuscore = document.querySelector("#cpu-score")

const rock = document.querySelector("#rock")

rock.addEventListener('click', (e) => {
   player = "rock"
   playGame()
})

const paper = document.querySelector("#paper")

paper.addEventListener('click', (e) => {
   player = "paper"
   playGame()
})

const scissors = document.querySelector("#scissors")

scissors.addEventListener('click', (e) => {
   player = "scissors"
   playGame()
})



function getComputerChoice () {
   let cpuTurn =  Math.floor(Math.random() * 3)
   const computerChoice = cpuChoices[cpuTurn]
   return computerChoice
}

function playGame() {

      const computerChoice = getComputerChoice();
      playRound(player, computerChoice)
      rounds++
      if (rounds === 5) {
   console.log("GAME OVER!")
} 
      if (playerPoints > cpuPoints && rounds === 5) {
         score.textContent = "PLAYER WINS! CPU LOSES!"
         
      } else if (cpuPoints > playerPoints && rounds === 5) {
         score.textContent = "CPU WINS! PLAYER LOSES!"
      } else if (cpuPoints === playerPoints && rounds === 5) {
         score.textContent = "TIE!"
      }
   
}


function playRound(playerChoice, computerChoice) {
   player = playerChoice.toLowerCase()
   cpu = computerChoice.toLowerCase()


   if (player === cpu) {
      console.log("Tie! No one wins!")
      
   } else if (player === "rock") {
      if (cpu === "scissors") {
      console.log("Player wins! Rock beats scissors!")
      
      playerPoints++
    } else {
      console.log("CPU wins! Paper beats rock!")
      
      cpuPoints++
    }
   } else if (player === "paper") {
      if (cpu === "rock") {
      console.log("Player wins! Paper beats rock!")
      
      playerPoints++
    } else {
      console.log("CPU wins! Scissors beats paper!")
      
      cpuPoints++
    } 
   } else if (player === "scissors") {
      if (cpu === "paper") {
      console.log("Player wins! Scissors beats paper!")
      
      playerPoints++
    } else {
      console.log("CPU wins! Rock beats scissors!")
      
      cpuPoints++
    } 
    
}
p1score.textContent = playerPoints
cpuscore.textContent = cpuPoints
}
