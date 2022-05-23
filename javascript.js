var imageSrc1 = diceRandom();
var imageSrc2 = diceRandom();

document.getElementById("img1").src = imageSrc1;
document.getElementById("img2").src = imageSrc2;

compare();

function compare(){

    if(imageSrc1===imageSrc2){
        document.getElementById("status").innerHTML = "DRAW!";
    }else if(imageSrc1<=imageSrc2){
        document.getElementById("status").innerHTML = "&#128681;player2 wins!";
    }else if(imageSrc2<=imageSrc1){
        document.getElementById("status").innerHTML = "&#128681;player1 wins!";
    }
}

function diceRandom() {
    const dices = ['images/dice1.png', 'images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];
    const random = dices[Math.floor(Math.random() * 6)];
    return random;
  }