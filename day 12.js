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