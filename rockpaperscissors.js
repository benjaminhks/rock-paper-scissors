console.log ("Hello World")
;

var choices = ["Rock", "Paper", "Scissors"]

function myComputerChoice() {
    let result = [Math.floor(Math.random()*choices.length)]; //assigning variable result to randomise the length of the array; returning an int of the array
    return choices[result]; //this returns the string instead of interger
}

function playerSelection () {
    let choice = prompt ("Please enter your choice", "");//create a prompt asking for input from the user when function is run
    if (choice === choices) { //this is to check if the input tallies with the array before executing the lines; should this be outside the function then?
        
    }

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