console.log ("Hello World")
;
var x = playerScore = 0;
var y = computerScore = 0;


var choices = ["ROCK", "PAPER", "SCISSORS"]
console.log (choices)


function myComputerChoice() {
    let result = [Math.floor(Math.random()*choices.length)]; 
    return choices[result]; 
}


function playerSelection () { //the function should make the result of the prompt case insensitive and camelcase insensitive
  var playerChoice = prompt ("Please enter your choice"); //create a prompt asking for input from the user when function is run
  var result = playerChoice.toString().toUpperCase(); //effectively converting all sorts of styles into a simple lowercase, so accepted all, then must change to return all the array choices to
  return result;
}

function playRound(playerSelection, myComputerChoice){
        if (playerSelection==myComputerChoice){
            console.log("It's a tie");
            return (x,y);
        }
        else if (playerSelection=="ROCK"&&myComputerChoice=="SCISSORS" || playerSelection=="PAPER"&&myComputerChoice=="ROCK" || playerSelection=="SCISSORS"&&myComputerChoice=="PAPER") {
            console.log ("Player wins the round");
            return (x++);}
        else if (playerSelection=="ROCK"&&myComputerChoice=="PAPER" || playerSelection=="PAPER"&&myComputerChoice=="SCISSORS" || playerSelection=="SCISSORS"&&myComputerChoice=="ROCK"){
            console.log ("Computer wins the round"); 
            return (y++);
            }
        }


function game (){
    for (let i= 0; i<5; i++) {
    playerChoice = prompt ("Please choose Rock, Paper or Scissors");
    playerSelection= (playerChoice.toUpperCase());
    console.log ("Player has chosen " + playerSelection);
    
    choices = ["rock","paper","scissors"];
    result = [Math.floor(Math.random()*choices.length)];
    myComputerChoice = choices[result];
    console.log("Computer has picked "+(myComputerChoice.toUpperCase().toUpperCase()));
    
    console.log(playRound(playerSelection,myComputerChoice))
    
    }if (playerScore>computerScore){
            return "Player has won the game"
    }else if (playerScore<computerScore){
        return "Computer has won the game"
    }
    }
//https://stackoverflow.com/questions/71590630/rock-paper-scissors-game-prompt-loop-and-scoreboard