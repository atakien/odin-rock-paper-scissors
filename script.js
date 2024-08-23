const options =["Rock", "Paper", "Scissors"];
    
const getComputerChoice = function (){
    const randomNumber = Math.floor(Math.random()*3);
    let computerChoice;
    if(randomNumber === 0){
     computerChoice = options[0]
    }
    else if(randomNumber === 1){
     computerChoice = options[1]
    }
    else if(randomNumber === 2){
     computerChoice = options[2]
    }
    return computerChoice;
}

const getHumanChoice = function(){
    const humanNumber = Number(prompt("Please enter 0 for Rock, 1 for Paper and 2 for Scissors"));
    let humanChoice; 
    if(humanNumber === 0){
      humanChoice = options[0];
    }
     else if(humanNumber === 1){
      humanChoice = options[1];
    }
     else if(humanNumber === 2){
      humanChoice = options[2];
    }
    
    return humanChoice;
}

const playGame = function(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if(humanChoice === options[0] && computerChoice === options[2]  ){
            console.log("You win! Rock beats scissors");
            humanScore++;
        } else if (humanChoice === options[2] && computerChoice === options[1]){
            console.log("You win! Scissors beats paper");
            humanScore++;
        } else if(humanChoice === options[1] && computerChoice === options[0]){
            console.log("You win! Paper beats rocks");
            humanScore++;
        }
         else if(computerChoice === options[0] && humanChoice === options[2]  ){
            console.log("You lose! Rock beats scissors");
            computerScore++;
        } else if (computerChoice === options[2] && humanChoice === options[1]){
            console.log("You lose! Scissors beats paper");
            computerScore++;
        } else if(computerChoice === options[1] && humanChoice === options[0]){
            console.log("You lose! Paper beats rocks");
            computerScore++;
        } else {
            console.log("Try again");
        }
      }

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    } 

    if (humanScore > computerScore) {
    console.log('Congratulations! You are the overall winner!');
    } else if (computerScore > humanScore) {
    console.log('Sorry, the computer wins overall!');
    } else {
    console.log('It\'s a tie!');
    }
}

playGame();
