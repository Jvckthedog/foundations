console.log("hello World")
console.log (" ");

function getHumanChoice() {
    let humanInput = prompt("Rock, Paper, or Scissors?").toLowerCase();
        return humanInput; 
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice(); 

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Its a Tie!");
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        console.log("Human Wins!");
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        console.log("Human Wins!");
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        console.log("Human Wins!");
    } else {
        console.log("Computer Wins");
    }
}

console.log(humanChoice);
console.log(computerChoice);

playRound(humanChoice, computerChoice);

