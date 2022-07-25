console.log ("Hello World")
;
var rps = ["Rock",
"Paper",
"Scissors"
];

function myComputerChoice () {
    return [Math.floor(Math.random()*rps.length)]; 
    ;    // this is currently returning just intergers...
    //referenced: https://github.com/mooniiDev/rock-paper-scissors-game/blob/master/scripts.js
    //2nd reference: https://stackoverflow.com/questions/16017657/how-do-i-generate-a-randomly-selected-word-or-phrase-from-a-previously-selecte
    //next problemt to solve is how to convert from the character string into the words itself?
}

function playerSelection () {
    return [Math.floor(Math.random()*rps.length)];
}
for (var x=0; x<=2;x++)
console.log (myComputerChoice) && console.log (playerSelection) //calling both functions work; however they still return integers

//now i have to write some conditions; I think switch statements with conditions will do well here...

//  if {playerselection === rock & myComputerChoice === paper; is it possible to have some for loops here? doesn't seem possible
//      alert ("Player has won!");
// actually should be switch statemnets here
// else {

// }