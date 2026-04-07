let compscore=0 , humscore=0;

function computerChoice() {
    let Comp = Math.floor(Math.random() * 3)
    return Comp;
    }

function humanChoice(choice){
    if(choice === "Rock"){
        return 0;
    }
    else if (choice === "Paper"){
        return 1;
    }
    else{
        return 2;
    }
}

function playRound(){
    for (let round=1; round<=5; round++) {
        
    let choice = prompt("Chose Rock Paper or Scissors, relember is case sensitive");
    console.log(`Current round: ${round}`);

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
}

playRound();