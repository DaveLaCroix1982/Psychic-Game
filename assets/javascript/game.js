
var wins = 0;
var losses = 0;
var guesses = 7;
var guessesLeft = 7;
var guess = [];
var compGuess = [];

var cpuChoices = ["a", "b", "c", "d", "e","f","g","h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var playAgain = function() {
    totalGuesses = 7;
    guessesLeft = 7;
}

    var cpuGuess = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
    compGuess.push(cpuGuess);
	console.log(cpuGuess);

    document.onkeyup = function(event) {
  var userGuess = event.key;
    guess.push(userGuess);
    console.log(userGuess);

        
         if ((userGuess===cpuGuess) && (guessesLeft > 0)){
            wins++; playAgain ();
            alert ("you are correct!!!!")
        }   
        else if ((userGuess !== cpuGuess) && (guessesLeft > 0)){
            guessesLeft = guessesLeft-1;
        }
        
        else {
            losses++; playAgain ();
            alert ("Today is not your lucky day im sorry")
            guessesLeft = 7;
            guess.length = 0;
            cpuGuess.length = 0;
            var cpuGuess = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
            compGuess.push(cpuGuess);
	        console.log(cpuGuess);
        }
           
        
            var html = "<p> Guess What Letter is on this card!</p>"+
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" ;

          document.querySelector("#game").innerHTML = html;
    }