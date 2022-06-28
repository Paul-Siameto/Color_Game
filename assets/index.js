var diffEls = document.querySelectorAll(".diff__btn");
var diffEl = document.querySelector(".diff__btn.active").innerHTML;
var n = diffEl;
var colorsEl = document.querySelector(".colors");
var colorsBlocks;
var rgbEl = document.querySelector(".rgb");
var statusEl = document.querySelector(".status");
var colors = [];
createBlocks(n);
resetGame();




function checkColors(e) {
  // your code here
  // alert(randomColor())
  var clicked = e.target;
  var clickedIndex = clicked.id || "No ID!";
  // $(clicked).html(currentID);
  // alert(currentID)


  const paragraphColor = (document.getElementsByClassName('rgb')[0].innerText)
  const pickedColor = (document.getElementsByClassName('colors__block')[clickedIndex].style.backgroundColor);
  
  for (var i = 0; i = 6; i++) {
    document.getElementsByClassName('colors__block')[0].backgroundColor = "rgb(243, 126, 20)";
  }

// trtr.style.backgroundColor = "rgb(243, 126, 20)";
  if(paragraphColor == pickedColor.toUpperCase()){
    
    
  }else{
    alert('Try again')
  }
}

function resetGame() {
  createBlocks(n);
  document.body.style.color = "black";
  colors = [];
  pickColors();
  pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  setColors();
  statusEl.innerHTML =
    "Try to guess the right color based on the RGB value by clicking on the blocks.";
}

function setColors() {
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (var i = 0; i < n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
  

}

function random(r) {
  return Math.floor(Math.random() * r);
}

function setNumberOfTiles(e) {
  
  n = e
  resetGame()
}

function createBlocks(num) {
  colorsEl.innerHTML = "";

  // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
  for (var i = 0; i < num; i++) {
    var block = document.createElement("div");
    block.classList.add("colors__block");
    block.id = i;
    colorsEl.appendChild(block);
  }
  colorsBlocks = document.querySelectorAll(".colors__block");
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].addEventListener("click", checkColors);
  }
}
