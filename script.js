var correctSound = new Audio("correctSound.wav");
var wrongSound = new Audio("wrongSound.mp3");
var gameWon = new Audio("gameWon.wav");
var rounds = 7;
var points=0;
var save;
function cancelInstructions() {
    document.getElementById("instructions-container").style.display = "none";
}
function show(idx){

    rounds--;
    save = idx;
    console.log(idx);
    var cardArray = document.getElementsByClassName("card") ;
    var ind = Math.floor((Math.random()*10 )%cardArray.length) ;
    
    document.getElementsByClassName("below")[0].style.zIndex = "4";
    cardArray[ind].firstChild.innerHTML = "69";
    var flag=1;
    if(ind == idx ){
        document.querySelector(".container").style.background = "Green";
        correctSound.play();
        console.log("wonnnnn");
        points+=5;
        document.getElementById("score").innerHTML = points;
    }
    else {
        document.querySelector(".container").style.background = "Red";
        wrongSound.play();
        points-=3;
        document.getElementById("score").innerHTML = points;
    }
  setTimeout(function(){
    document.querySelector(".container").style.background = "Black";
    document.getElementsByClassName("below")[0].style.zIndex = "0";
        cardArray[ind].firstChild.innerHTML = "?";
    if(rounds==0){
        console.log("game finished");
        if(points>1){
        document.querySelector("#remarks").innerHTML = "WON!!!";}
        else{
            document.querySelector("#remarks").innerHTML = "Lost!!!";
        }
        document.querySelector(".finished").style.zIndex = "5";
    }
       
    },2000);
}
function help(){
    
}



