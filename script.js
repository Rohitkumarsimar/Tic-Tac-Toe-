console.log("Welcome to the game!...");
const tick = new Audio("assets/click.mp3");
const winner = new Audio("assets/winner.mp3");
const bgm = new Audio ("assets/bgm.mp3");
const resetbgm = new Audio("assets/reset.mp3");
let turn = "X";
let gameover=false;

// function to change the turn
const changeTurn = () => {
return turn === "X" ? "O" : "X";
}

// function for winner
const checkwinner = () => {
  let boxtext = document.getElementsByClassName("boxtext");
let win = [
  [3,4,5],
  [0,1,2],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
win.forEach(e =>{
  if((boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[1]].innerText===boxtext[e[2]].innerText&&boxtext[e[0]].innerText!=="")){
    document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
    gameover=true;
    document.querySelector('.img').getElementsByTagName("img")[0].style.height="200px";
    winner.play();
     
  }
})
}

// main
// bgm.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let btext = element.querySelector('.boxtext');
  element.addEventListener('click', () => {
    if (btext.innerText === '') {
      btext.innerText = turn;
      turn = changeTurn();
      tick.play();
      checkwinner();
     if(!gameover){
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
  }
  })
})

//resetting
const reset = document.getElementById("reset");
reset.addEventListener('click',() =>{
  let boxtext= document.getElementsByClassName("boxtext");
  Array.from(boxtext).forEach(element =>{
element.innerText="";
resetbgm.play();
  })
  turn="X"
  gameover=false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector('.img').getElementsByTagName("img")[0].style.height="0px";
} )