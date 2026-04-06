for(let round=0; round<5; round++){
    
    function computerChoice(){
        let Comp = Math.round(Math.random() * 2);
        return Comp;
    }

    console.log(computerChoice());

}
