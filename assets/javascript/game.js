var cars = ["volkswagen", "subaru", "mercedes", "lexus", "audi", "toyota", "bmw", "dodge", "ford", "chevrolet", "cadillac", "lincoln", "infiniti", "nissan", "honda", "acura", "porsche"];
var wins = 0;
var losses = 0;
var remaining = 9;
var correct = [];
var randomWord = "";
var lines = 0;
var wrongGuess = [];
var leters = []


var directionsText = document.getElementById("directions-text");
var wordText = document.getElementById("word-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingText = document.getElementById("remain-text");
var guessedText = document.getElementById("guessed-text");

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    randomWord = cars[Math.floor(Math.random() * cars.length)];
    letters = randomWord.split("");
    lines = randomWord.length;
    for (var i = 0; i < lines; i++) {
        letters.push("_");
    }

    document.getElementById("word-text").innerHTML = " " + correct.join(" ");

    console.log(randomWord);
    console.log(letters);
    console.log(lines);
    console.log(correct);
}

    
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    remainingText.textContent = "Guesses Remaining: " + remaining;
    wordText.textContent = "_" + lines;




