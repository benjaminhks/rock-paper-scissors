console.log ("Hello World")
;

var choices = ["ROCK", "PAPER", "SCISSORS"]
console.log (choices)
//var playerChoice = prompt ("Please enter either Rock, Paper or Scissors")

//console.log (playerChoice) //this is how to console log

function myComputerChoice() {
    let result = [Math.floor(Math.random()*choices.length)]; //assigning variable result to randomise the length of the array; returning an int of the array
    return choices[result]; //this returns the string value instead of interger
}


function playerSelection () { //the function should make the result of the prompt case insensitive and camelcase insensitive
  var playerChoice = prompt ("Please enter your choice"); //create a prompt asking for input from the user when function is run
  var result = playerChoice.toString().toUpperCase(); //effectively converting all sorts of styles into a simple lowercase, so accepted all, then must change to return all the array choices to
  return result;
}

function playRound(playerSelection, myComputerChoice){
        if (playerSelection==myComputerChoice){
            return "Tie"
        }
        else if (playerSelection=="ROCK"&&myComputerChoice=="SCISSORS" || playerSelection=="PAPER"&&myComputerChoice=="ROCK" || playerSelection=="SCISSORS"&&myComputerChoice=="PAPER") {
                return ("Player wins the round");}
            else {
                return ("Computer wins the round!")
            }
   
}

function game ()
    {for (let i= 0; i<5; i++){
playRound(playerSelection(),myComputerChoice()) // but this just returns undefined instead of the return values above, what's with that?
    }
    if (score > 3) //how to start scoring it? write a keep score function?
}


//function myComputerChoice () {
//    return [Math.floor(Math.random()*rps.length)]; 
    ;    // this is currently returning just intergers...
    //referenced: https://github.com/mooniiDev/rock-paper-scissors-game/blob/master/scripts.js
    //2nd reference: https://stackoverflow.com/questions/16017657/how-do-i-generate-a-randomly-selected-word-or-phrase-from-a-previously-selecte
    //next problemt to solve is how to convert from the character string into the words itself?
//}
//return myComputerChoice

//function play() {
//   var rps = ["Rock","Paper","Scissors"]
//   return rps[myComputerChoice];
//}

//function playerSelection () {
//    return [Math.floor(Math.random()*rps.length)];
//}
//for (var x=0; x<=2;x++)
//console.log (myComputerChoice) && console.log (playerSelection) //calling both functions work; however they still return integers

//now i have to write some conditions; I think switch statements with conditions will do well here...

//  if {playerselection === rock & myComputerChoice === paper; is it possible to have some for loops here? doesn't seem possible
//      alert ("Player has won!");
// actually should be switch statemnets here
// else {

// }