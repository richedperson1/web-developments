

const userChoice = [...document.getElementsByClassName("choice")];

console.log(userChoice);
const choicesHave = {
    "r": "Rock",
    "p": "Paper",
    "s": "Scissors"
}

userChoice.forEach((val) => {
    let idFirst = val.getAttribute("id");
    val.addEventListener("click", () => {
        userWinnerLoser(idFirst)
    })
})

function userWinnerLoser(idUser) {
    const userChoise = choicesHave[idUser];
    let displayuserChoice = document.getElementById("result-user-stat");
    let displayComputer = document.getElementById("result-comp-stat");

    let localStr = "User : " + userChoise
    displayuserChoice.innerHTML = localStr
    const randomChoice = computerChoice()
    let computerStr = "Computer : " + choicesHave[randomChoice]
    displayComputer.innerHTML = computerStr

    winnerChoice(userChoise, choicesHave[randomChoice])
}

function computerChoice() {
    const choiceStr = "rps";
    let random = Math.floor(Math.random() * 3);
    return choiceStr[random];
}


const playerScoreBoard = document.getElementById("userScoreVal");
const computerScoreBoard = document.getElementById("compScoreVal");

function winnerChoice(player, computer) {
    player = String(player).toLowerCase()
    computer = String(computer).toLowerCase()
    // console.log(player, computer);
    // console.log(playerScoreBoard, computerScoreBoard);
    const result = document.getElementById("result-final-stat");
    if (player === computer) {
        result.textContent = 'Tie';
    }
    else if (player == 'rock') {
        if (computer == 'paper') {
            result.textContent = 'Computer Won';
            computerScoreBoard.textContent = Number(computerScoreBoard.innerHTML) + 1;


        } else {
            result.textContent = 'Player Won'
            playerScoreBoard.textContent = Number(playerScoreBoard.innerHTML) + 1;
        }
    }
    else if (player == 'scissors') {
        if (computer == 'rock') {
            result.textContent = 'Computer Won';
            // computerScore++;
            computerScoreBoard.textContent = Number(computerScoreBoard.innerHTML) + 1;
        } else {
            result.textContent = 'Player Won';
            playerScoreBoard.textContent = Number(playerScoreBoard.innerHTML) + 1;
        }
    }
    else if (player == 'paper') {
        if (computer == 'scissors') {
            result.textContent = 'Computer Won';
            // computerScore++;
            computerScoreBoard.textContent = Number(computerScoreBoard.innerHTML) + 1;
        } else {
            result.textContent = 'Player Won';
            playerScoreBoard.textContent = Number(playerScoreBoard.innerHTML) + 1;
        }
    }

}