let compscore = 0, humscore = 0,roundsPlayed = 0;
let gameOver = false;

const results = document.querySelector("#results");
const buttons = document.querySelectorAll("button");

const buttonR = document.querySelector("#rock");
const buttonP = document.querySelector("#paper");
const buttonS = document.querySelector("#scissors");

results.style.paddingTop = "12px";

buttonR.addEventListener("click", () => { 
    playGame("rock");
});
buttonP.addEventListener("click", () => { 
    playGame("paper");
});
buttonS.addEventListener("click", () => { 
    playGame("scissors");
});

function computerChoice() {
    let Comp = Math.floor(Math.random() * 3)
    return Comp;
}

function humanChoice(choice){
    if(choice === "rock"){
        return 0;
    }
    else if (choice === "paper"){
        return 1;
    }
    else{
        return 2;
    }
}

function appendResult(message, isBold = false) {
    const entry = document.createElement("div");
    entry.textContent = message;
    entry.style.padding = "4px 0";
    if (isBold) {
        entry.style.fontWeight = "700";
    }
    results.appendChild(entry);
}

function playRound(choice){
    let human = humanChoice(choice);
    let computer  = computerChoice();
    let message = "";

    if (human === computer){
        message = "Tie, no points for anybody";
    }

    else if(
            (human === 0 && computer === 2) ||
            (human === 1 && computer === 0) || 
            (human === 2 && computer === 1)
            ){
            humscore++;
            message = "Victory! Point for you";
    }

    else{
        compscore++;
        message = "Defeat! Point for computer";
    }

    appendResult(message);
    appendResult(`Current Score: ${humscore} vs ${compscore}`);

}

function playGame(choice) {
    if (gameOver) {
        return;
    }

    appendResult(`Current Round: ${roundsPlayed + 1}`, true);

    playRound(choice);

    roundsPlayed++;

    if (roundsPlayed === 5) {
        gameOver = true;

        appendResult("=== FINAL RESULT ===");

        if (humscore > compscore) {
            appendResult("You won the game");
        } else if (compscore > humscore) {
            appendResult("Computer won the game");
        } else {
            appendResult("It's a tie");
        }

        buttons.forEach((button) => {
            button.disabled = true;
        });
    }

}
