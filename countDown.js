
let value = 3600;
let countInterval;
const countdownTimer = document.getElementById("countDown");
displayTime(value);

function startCountdown() {
    if (!countInterval)
        countInterval = setInterval(downTimer, 1000);
}

function downTimer() {
    if (value == 0) {
        // localStorage.setItem("counter", test);
        value = 0;
        clearInterval(countInterval);
        countInterval = null;
    }
    else {
        value = parseInt(value) - 1;
        // localStorage.setItem("counter", value);
    }
    displayTime(value);
}

function stopCountdown() {
    clearInterval(countInterval);
    // release our count interval from the variable
    countInterval = null;
  }

function resetCountdown() {
    value = 3600;
    displayTime(value);
}

function displayTime(value) {
    var minutes = Math.floor(value / 60)
    var seconds = value % 60
    if (minutes < 10) minutes = '0' + minutes
    if (seconds < 10) seconds = '0' + seconds
    countdownTimer.innerText = minutes + ':' + seconds;
}
