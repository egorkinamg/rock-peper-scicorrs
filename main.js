const computerChoice = document.querySelector(".computer-choice")
const yourChoice = document.querySelector(".user-choice")
const result = document.querySelector(".result")
console.log(computerChoice)

const buttons = document.querySelectorAll(".button")
console.log(buttons)

const buttons2 = document.getElementsByClassName("button")
console.log(buttons2)

const rock = document.querySelector("#rock")
console.log(rock)

const paper = document.getElementById("paper")
console.log(paper)

const scissors = document.getElementById("scissors")
console.log(scissors)

const scissors1 = document.querySelector("#scissors")
console.log(scissors1)

const scissors2 = document.getElementsByClassName("btn-info")
console.log(scissors2)

let compCh
let userCh
// функция для гинерации вибора компютера


let generateComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        compCh = "rock"
    } else if (randomNumber === 1) {
        compCh = "paper"
    } else {
        compCh = "scissors"
    }
    computerChoice.textContent = compCh
}

let compareChoices = () => {
    if(compCh === userCh) {
        result.textContent = 'draw'
    } else if (compCh === "rock" && userCh === "paper"){
        result.textContent = "you won"
    }  else if (compCh === "rock" && userCh === "scissors"){
        result.textContent = "you lost"
    }  else if (compCh === "paper" && userCh === "scissors"){
        result.textContent = "you won"
    }  else if (compCh === "paper" && userCh === "rock"){
        result.textContent = "you lost"
    }  else if (compCh === "scissors" && userCh === "rock"){
        result.textContent = "you won"
    }   else if (compCh === "scissors" && userCh === "paper"){
        result.textContent = "you lost"
    }  
}

for (let btn of buttons) {
    btn.addEventListener('click', function () {
        generateComputerChoice()
        userCh = btn.id
        yourChoice.textContent = userCh
        compareChoices()

    })


}
