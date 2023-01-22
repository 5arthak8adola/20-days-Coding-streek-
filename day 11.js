var score = 0;
  function getRandomItemNum(length) {
  return Math.ceil(Math.random() * length)
}

function recalculateWinItem() {
  winItem = getRandomItemNum(array.length);
}

function checkIsWin(buttonNum) {
  var text = `Clicked <b>${buttonNum}</b>. Win item: ${winItem};  `
  if(buttonNum === winItem) {
    text += "You won";
    score++; //increment score
    console.log(score);
  }
  else {
    text += "You lose";
    score = 0; //reset score to zero
    console.log(score);
  }
  document.getElementById("result").innerHTML = text;
}
var array = [...document.querySelectorAll("#container .but")].map(function(but) { 
  but.addEventListener("click",function() { checkIsWin(+this.id.replace("button",""))})
  return `(${but.id})`
});
window.addEventListener("load", function() {
  document.getElementById("start").addEventListener("click", recalculateWinItem)
  recalculateWinItem();
})
<div id="result"></div>
<hr/>
<div id="container" style="width:100%">
  <button id="button1" class="but">1</button>
  <button id="button2" class="but">2</button>
</div>
<button type="button" id="start">RANDOMIZE</button>
Expand snippet
Share
Improve this answer
Follow
answered Nov 8, 2019 at 14:32
Anis R.'s user avatar
Anis R.
6,52622 gold badges1313 silver badges3737 bronze badges
It works but it doesn't show it to the counter to the player. – 
Elguti
 Nov 8, 2019 at 14:42
@Elguti Well, you could replace the console.log by some innerHTML altering, right? – 
Anis R.
 Nov 8, 2019 at 14:43 
Or use text += " Score: " + score; if you want the score to show next to the other info you're displaying. – 
Anis R.
 Nov 8, 2019 at 14:45 
Add a comment

0


var winStreak = 0;

function getRandomItemNum(length) {
  return Math.ceil(Math.random() * length)
}

function recalculateWinItem() {
  winItem = getRandomItemNum(array.length);
}

function checkIsWin(buttonNum) {
  var text = `Clicked <b>${buttonNum}</b>. Win item: ${winItem};  `
  if(buttonNum === winItem){
    text += "You won"
    document.getElementById("winstreak").innerText = 'Streak counter: ' + (++winStreak)
  } else {
    document.getElementById("winstreak").innerText = 'Streak counter: 0';
    winStreak = 0;
    text += "You lose";
  }
  document.getElementById("result").innerHTML = text;
}
var array = [...document.querySelectorAll("#container .but")].map(function(but) { 
  but.addEventListener("click",function() { 
    checkIsWin(+this.id.replace("button",""))
  })
  return `(${but.id})`
});
window.addEventListener("load", function() {
  document.getElementById("start").addEventListener("click", recalculateWinItem)
  recalculateWinItem();
})

