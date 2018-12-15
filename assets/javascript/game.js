
var wins = 0;
var losses = 0;
var guesses = 7;
var guessesLeft = 7;
var guess = [];
var letterleft = null;

var cpuChoices = ["a", "b", "c", "d", "e","f","g","h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var cpuGuess = cpuChoices[Math.floor(Math.random()*cpuChoices.length)];
    console.log(cpuGuess);

    document.onkeyup = function(event) {
        var letter = event.key.toLowerCase();