const choices = document.querySelectorAll('.rock, .paper, .sc');
const container1 = document.querySelector('.container');
const startbtn = document.querySelector('.start');
const body1 = document.querySelector('body');

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

    startbtn.style.display = 'none';



const rescontainer = document.createElement('div');
rescontainer.setAttribute('style', 'padding:5px 10px; border:1px solid black; margin: 10px; background-color: white;');
body1.appendChild(rescontainer);

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
    container1.style.display = 'flex';

    const a = await hChoice();

    container1.style.display = 'none';

    return a;
}




async function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        const a = document.createElement('p')
        a.setAttribute('style', 'text-align: center; font-size: 20px; padding: 5px 10px;');
        a.textContent = "You Win! Rock beats Scissors"
        rescontainer.appendChild(a);
        humanScore++
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        const a = document.createElement('p');
        a.setAttribute('style', 'text-align: center; font-size: 20px; padding: 5px 10px; ');
        a.textContent = "You Win! Paper beats Rock";
        rescontainer.appendChild(a);
        humanScore++
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        const a = document.createElement('p');
        a.setAttribute('style', 'text-align: center; font-size: 20px; padding: 5px 10px;');
        a.textContent = "You Win! Scissors beat Paper";
        rescontainer.appendChild(a);
        humanScore++
    } else if (humanChoice === computerChoice) {
        const a = document.createElement('p');
        a.setAttribute('style', 'text-align: center; font-size: 20px; padding: 5px 10px;');
        a.textContent = "It's a Draw";
        rescontainer.appendChild(a);
    } else {
        const a = document.createElement('p');
        a.setAttribute('style', 'text-align: center; font-size: 20px; padding: 5px 10px;');
        a.textContent = `You lose! ${computerChoice} beat ${humanChoice}`;
        rescontainer.appendChild(a);
        computerScore++
    }
}

function totScore() {
    const a = document.createElement('p');
    a.setAttribute('style', 'text-align: center; font-size: 20px; padding: 5px 10px; margin: 10px; border: 1px solid black; background-color: greenyellow;');
    a.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`
    rescontainer.appendChild(a);
}

playRound(await getHumanChoice(),getComputerChoice());
playRound(await getHumanChoice(),getComputerChoice());
playRound(await getHumanChoice(),getComputerChoice());
playRound(await getHumanChoice(),getComputerChoice());
playRound(await getHumanChoice(),getComputerChoice());


totScore();

startbtn.style.display = 'inline-block';

}

startbtn.addEventListener('click', () => {
    playGame();
});



