const choices = document.querySelectorAll('.rock, .paper, .sc');
const container1 = document.querySelector('.container');

function hChoice () {
    return new Promise(resolve => {
        choices.forEach(choice => {
            choice.addEventListener("click", () => {
                resolve(choice.innerHTML);
            }, {once: true});
        })
    })
};






async function playGame() {

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

 async function getHumanChoice() {
    container1.style.display = 'block';

    const a = await hChoice();

    container1.style.display = 'none';

    return a;
}




async function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore++
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You Win! Paper beats Rock");
        humanScore++
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You Win! Scissors beat Paper");
        humanScore++
    } else if (humanChoice === computerChoice) {
        console.log("It's a Draw")
    } else {
        console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
        computerScore++
    }
}

function totScore() {
    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`)
}

playRound(await getHumanChoice(),getComputerChoice());


totScore();

}

playGame();



