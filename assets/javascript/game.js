//Initialize Variables for Crystals, Win/Loss, 
var gemOne;
var gemTwo;
var gemThree;
var gemFour;

var targetNumber;
var totalScore = 0;
var winScore = 0;
var lossScore = 0;

//Reset Function
function reset() {
    gemOne = Math.floor(Math.random() * 10) + 1;
    gemTwo = Math.floor(Math.random() * 10) + 1;
    gemThree = Math.floor(Math.random() * 10) + 1;
    gemFour = Math.floor(Math.random() * 10) + 1;
    targetNumber = Math.floor(Math.random() * 50) + 15;
    totalScore = 0;
    $("#wins").text(winScore)
    $("#loss").text(lossScore)
    $("#total").text(totalScore)
    $("#random").text(targetNumber);
}

console.log(reset)
//Call Back Functions
$(document).ready(function () {

    $("#green").on("click", function() {
        Score(gemOne);
    });

    $("#lilac").on("click", function() {
        Score(gemTwo);
    });

    $("#pink").on("click", function() {
        Score(gemThree);
    });

    $("#blue").on("click", function() {
        Score(gemFour);
    });

//Events (Score Function)
    function Score(gemAmount) {
        totalScore += gemAmount
        $("#total").text(totalScore)
        if (totalScore === targetNumber) {
            winScore++;
            reset();
            }
        else if (totalScore >= targetNumber) {
            lossScore++;
            reset();
        };
    }
    reset();
});