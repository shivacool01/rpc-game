const choices=["rock", "paper","scissor"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");


        function playGame(playerchoice){

    const computerschoice = choices[Math.floor(Math.random() * 3)]
    let result = "";

    if(playerchoice === computerschoice){
        result = "IT'S A TIE"
    }
    else{
        switch(playerchoice){
           case "rock":
            result = (computerschoice === "scissor") ? "YOU WIN!" : "YOU LOSE!";
            break;
           case "paper":
            result = (computerschoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
            break;
           case "scissor":
            result = (computerschoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
            break;
            
        }
    }

    playerdisplay.textContent = `player: ${playerchoice}`;
    computerdisplay.textContent = `computer: ${computerschoice}`;
    resultdisplay.textContent= result;
}  

