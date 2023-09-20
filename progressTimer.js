let nIntervId;
const progressBarEl = document.getElementById("progressBar");
const progressNumEl = document.getElementById("progressNum");      


let width = 0;
  
function startTimer() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(incrementTimer, 1000);
  }
}

function incrementTimer() {
  
    if (width == 100) {
      clearInterval(nIntervId);
    } else {
      width++; 
      progressBarEl.style.width = width + '%';
      updateCounter(width);
    }
}

function updateCounter(num) {
    var minutes = Math.floor(num / 60)
    var seconds = num % 60
    if (minutes<10) minutes = '0'+minutes      
    if (seconds<10) seconds = '0'+seconds    
    progressNumEl.innerText = minutes+':'+seconds;
    
}

function resetTimer() {
    width = 0; 
    progressBarEl.style.width = width + '%';
    progressNumEl.innerText = '0:00';
}

function stopTimer() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
}
