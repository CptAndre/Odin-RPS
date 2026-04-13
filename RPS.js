let compscore=0 , humscore=0;

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

function playRound(choice){
    let human = humanChoice(choice);
    let computer  = computerChoice();

    if (human === computer){
        console.log("Tie, no points for anybody");
    }

    else if(
            (human === 0 && computer === 2) ||
            (human === 1 && computer === 0) || 
            (human === 2 && computer === 1)
            ){
            console.log("Victory! Point for you");
            humscore++;
    }

    else{
        console.log("Defeat! Point for computer");
        compscore++;
    }
        
    console.log(`Current Score: ${humscore} vs ${compscore}`);

}

function playGame(choice) {
    playRound(choice);
}

/* function playGame() {
    for (let round = 1; round <= 5; round++) {
        let choice = prompt(`Round ${round}: Choose Rock, Paper or Scissors`);
        playRound(choice);
    }

    console.log("=== FINAL RESULT ===");

    if (humscore > compscore) {
        console.log("You won the game");
    } else if (compscore > humscore) {
        console.log("Computer won the game");
    } else {
        console.log("It's a tie");
    }
}

playGame(); */

const buttonR = document.querySelector("#rock");
const buttonP = document.querySelector("#paper");
const buttonS = document.querySelector("#scissors");

buttonR.addEventListener("click", () => { 
    playGame("rock");
});
buttonP.addEventListener("click", () => { 
    playGame("paper");
});
buttonS.addEventListener("click", () => { 
    playGame("rock");
});