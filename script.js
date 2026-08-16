function playGame() {

let humanScore = 0
let computerScore = 0

function random() {
    return Math.floor(Math.random()* 3)
}

function getComputerChoice() {
    let a=random();
    if (a===0) {
        return "Rock";
    } else if (a===1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    return prompt("Enter Rock, Paper, or Scissors","").toLowerCase()
}

function getHumanChoice1() {
    let a = getHumanChoice();
    return a[0].toUpperCase() + a.slice(1)
}

function playRound(humanChoice, computerChoice) {
     humanChoice = getHumanChoice1();
     computerChoice = getComputerChoice();

    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore = humanScore + 1
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You Win! Paper beats Rock");
        humanScore = humanScore + 1
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You Win! Scissors beat Paper");
        humanScore = humanScore + 1
    } else if (humanChoice === computerChoice) {
        console.log("It's a Draw")
    } else {
        console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
        computerScore = computerScore + 1
    }
}

function totScore() {
    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
}

playRound();
playRound();
playRound();
playRound();
playRound();


totScore();

}

playGame();



