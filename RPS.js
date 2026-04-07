let compscore=0 , humscore=0;

for (let round=0; round<5; round++) {
    
    let choice = prompt("Chose Rock Paper or Scissors, relember is case sensitive");

    function computerChoice() {
        let Comp = Math.round(Math.random() * 2);
        return Comp;
    }

    function humanChoice(){
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

    let human = humanChoice();
    let computer  = computerChoice();

        if (human === computer ){
            console.log("Tie, no points for anybody");
        }

        else if((human === 0 && computer === 2)||
                 (human === 1 && computer === 0) || 
                 (human === 2 && computer === 1)){
            console.log("Victory! Point for you");
            humscore++;

        }

        else{
            console.log("Defeat! Point for computer");
            compscore++;
        }
        
        console.log(`Current Score: ${humscore} vs ${compscore}`);
}
