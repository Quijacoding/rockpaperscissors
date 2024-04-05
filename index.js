const cpuChoices = ["rock", "paper", "scissors"]

function playGame() {
   let playerPoints = 0
   let cpuPoints = 0
   let rounds = 0
   if (rounds == 5) {
      console.log("GAME OVER!")
      if (playerPoints > cpuPoints) {
         console.log("PLAYER WINS! CPU LOSES!")
      } else {
         console.log("CPU WINS! PLAYER LOSES!")
      }
   }

   function getComputerChoice () {
      cpuTurn =  Math.floor(Math.random() * 3)
      const computerChoice = cpuChoices[cpuTurn]
      return computerChoice
   }
   
   const playerChoice = prompt("Rock Paper Scissors?")
   const computerChoice = getComputerChoice();
   
   function playRound(playerChoice, computerChoice) {
            player = playerChoice.toLowerCase()
            cpu = computerChoice.toLowerCase()
            if (player === cpu) {
               console.log("Tie! No one wins!")
               rounds++
            } else if (player === "rock") {
               if (cpu === "scissors") {
               console.log("Player wins! Rock beats scissors!")
               rounds++
               playerPoints++
             } else {
               console.log("CPU wins! Paper beats rock!")
               rounds++
               cpuPoints++
             }
            } else if (player === "paper") {
               if (cpu === "rock") {
               console.log("Player wins! Paper beats rock!")
               rounds++
               playerPoints++
             } else {
               console.log("CPU wins! Scissors beats paper!")
               rounds++
               cpuPoints++
             } 
            } else if (player === "scissors") {
               if (cpu === "paper") {
               console.log("Player wins! Scissors beats paper!")
               rounds++
               playerPoints++
             } else {
               console.log("CPU wins! Rock beats scissors!")
               rounds++
               cpuPoints++
             } 
   }
   }

   function getComputerChoice () {
      cpuTurn =  Math.floor(Math.random() * 3)
      const computerChoice = cpuChoices[cpuTurn]
      return computerChoice
   }
   
   for (let i = 0; i < 5; i++) {
         playRound(playerChoice, computerChoice)

   }
   
}



console.log(playGame())