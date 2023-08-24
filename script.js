const image = document.querySelectorAll("img");
let button = document.getElementById("4");
let losses = document.getElementById("1");
let wins = document.getElementById("0");
let ties = document.getElementById("2");

var counterWin = 0;
var counterLoss = 0;
var counterTied = 0;

for (let img of image) {
  img.addEventListener("click", function abc() {
    if (img.className == "rock") {
      let a = Math.random() * 3;
      if (a <= 1) {
        alert("Computer chose: ROCK--->GAME TIED")
        counterTied++;
        ties.innerHTML = counterTied;
      } else if (a > 1 && a <= 2) {
        alert("Computer chose: PAPER--->YOU LOSE")
        counterLoss++;
        losses.innerHTML = counterLoss;
      } else {
        alert("Computer chose: SCISSORS--->YOU WON")
        counterWin++;
        wins.innerHTML = counterWin;
      }
    } else if (img.className == "paper") {
      let a = Math.random() * 3;

      if (a <= 1) {
        alert("Computer chose: ROCK--->YOU WON")
        counterWin++;
        wins.innerHTML = counterWin;
      } else if (a > 1 && a <= 2) {
        alert("Computer chose: PAPER--->GAME TIED")
        counterTied++;
        ties.innerHTML = counterTied;
      } else {
        alert("Computer chose: SCISSORS--->YOU LOSE")
        counterLoss++;
        losses.innerHTML = counterLoss;
      }
    } else {
      let a = Math.random() * 3;

      if (a <= 1) {
        alert("Computer chose: ROCK--->YOU LOSE")
        counterLoss++;
        losses.innerHTML = counterLoss;
      } else if (a > 1 && a <= 2) {
        alert("Computer chose: PAPER--->YOU WON")
        counterWin++;
        wins.innerHTML = counterWin;
      } else {
        alert("Computer chose: SCISSORS--->GAME TIED")
        counterTied++;
        ties.innerHTML = counterTied;
      }
    }
  });
}
button.addEventListener("click", function () {
  
  counterTied = 0;
  counterLoss = 0;
  counterWin = 0;
  ties.innerHTML = counterTied;
  losses.innerHTML = counterLoss;
  wins.innerHTML = counterWin;

});

for (let img of image) {
  img.addEventListener("mouseenter", function () {
    img.style.cursor = "pointer";
  });
}
