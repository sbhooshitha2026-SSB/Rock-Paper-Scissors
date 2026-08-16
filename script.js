console.log("Hello World")

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

console.log(getComputerChoice());