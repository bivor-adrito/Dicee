// alert("wow!")

// for random image number 1
var randomNumber1 = getRandomIntInclusive(1,6);
var randomDiceImage1 = "dice"+randomNumber1+".png";
var randomImageSrc1= "images/"+randomDiceImage1 ;
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSrc1);

// for random img number 2
var randomNumber2 = getRandomIntInclusive(1,6);
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSrc2= "images/"+randomDiceImage2 ;
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSrc2);

// to determine which is bigger
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Hurrah!!! Player 1 ";
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩"  ; 
}
else{
    document.querySelector("h1").innerHTML = "OMG!! Player 2 🚩 ";
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }