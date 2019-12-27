let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  //clear any existing timer
  clearInterval(countdown);
  
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    
    //check if we should stop it
    if(secondsLeft < 0) {
       clearInterval(countdown);
      return;
    }
    
    //display it    
    displayTimeLeft(secondsLeft)
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60); // floor removes remainder
  const remainderSeconds = seconds % 60; // modulus division remainder
  const display = `${minutes}:${remainderSeconds < 10? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

displayEndTime = (timestamp) => {
  const end = new Date(timestamp); // returns date string example: Fri Dec 27 2019 14:36:33 GMT+0100
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hour > 12? hour - 12 : hour}:${minutes < 10? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time); 
  console.log('this.dataset.time:', this.dataset.time, 'seconds: ', seconds);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});