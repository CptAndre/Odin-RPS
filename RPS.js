for (let round=0; round<5; round++) {
    
    let choice = prompt("Chose Rock Paper or Scissors, relember is case sensitive");

    function computerChoice() {
        let Comp = Math.round(Math.random() * 2);
        return Comp;
    }

    console.log(computerChoice());

    function humanChoice(){
        if(choice === "Rock"){
            return "Rock";
        }
        else if (choice === "Paper"){
            return "Paper";
        }
        else{
            return "Scissors";
        }
    }

    console.log(humanChoice());

}
