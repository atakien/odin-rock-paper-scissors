const randomNumber = Math.floor(Math.random()*3);
const options =["Rock", "Paper", "Scissors"]
    console.log(randomNumber);
const getComputerChoice = function (){
   let computerChoice;
    if(randomNumber === 0){
computerChoice = options[0]
    }
    if(randomNumber === 1){
computerChoice = options[1]
    }
    if(randomNumber === 2){
computerChoice = options[2]
    }
    return computerChoice;
}
console.log(getComputerChoice());
