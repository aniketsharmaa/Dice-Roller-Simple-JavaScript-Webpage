// var ol = document.querySelector("h1").innerHTML = "The Dice Game!!";
// setTimeout(onload, timeout ? 1000);

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImages);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImages);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win!!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Win!!";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}