'use strict';



const clockElement = document.getElementById('clock');
const alarmForm = document.getElementById('alarm-form');
const alarmInput = document.getElementById('alarm-input');
const alarmButton = document.getElementById('button');
const alarmMessage = document.querySelector('.txt');
const alarmSound = new Audio('./assests/audio/alarm.mp3');
alarmSound.type = 'audio/mp3';

// Set the clock to update every second
setInterval(() => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  clockElement.textContent = timeString;

  // Check if the alarm should go off
  if (timeString === alarmInput.value) {
    alarmSound.play();
    alarmMessage.textContent = 'Alarm set for ' + alarmInput.value;
    alarmInput.value = '';
    alarmButton.disabled = false;
  }
}, 1000);

// Add an event listener to the alarm form
alarmForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = alarmInput.value.trim();

  // Validate the user input
  const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (!regex.test(input)) {
    alarmMessage.textContent = 'Please enter a valid time (hh:mm)';
    return;
  }

  // Set the alarm and give users a visual indication that it has been set
  alarmMessage.textContent = 'Alarm set for ' + input;
  alarmInput.value = input;
  alarmButton.disabled = true;
});













/*
const clock = document.getElementById('clock');
const alarmTime = document.querySelector('.txt');
const time = document.querySelector('#alarm-input');
const alarmButton = document.querySelector('#button');

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeNew = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = timeNew;
}

// Set an interval to call the updateClock function every second
setInterval(updateClock, 1000);



// Function to set the alarm and validate the input
function setAlarm() {
  const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  if (!regex.test(time.value)) {
    alert('Please enter a valid time in the format "hh:mm".');
    return;
  }
  const alarmTm = time.value;
  alarmTime.textContent = alarmTm;
  time.value = '';
}

alarmButton.addEventListener('click', setAlarm);

// Function to check the alarm time every second and play the alarm sound
let alarmTriggered = false;

function checkAlarm() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeNew = `${hours}:${minutes}`;
  const alarmTimeNew = time.value;
  if (!alarmTriggered && timeNew === alarmTimeNew) {
    const alarmSound = new Audio('./assests/audio/alarm-01.mp3');
    alarmSound.type = 'audio/wav';
    alarmSound.play();
    alarmTime.textContent = 'Alarm!';
    alarmTriggered = true;
  }
}



/*
function checkAlarm() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeNew = `${hours}:${minutes}`;
  const alarmTimeNew = time.value;
  if (timeNew === alarmTimeNew) {
    const alarmSound = new Audio('./assests/audio/alarm-01.mp3');
    alarmSound.type = 'audio/wav';
    alarmSound.play();
    alarmTime.textContent = 'Alarm!';
  }
}

setInterval(checkAlarm, 1000);

/*Validation 
alarmButton.addEventListener('click', function() {
  const exp = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (exp.test(alarmTimeInput.value)) {
    alarmTime = alarmTimeInput.value;
    startAlarm();
  } else {
    alarmStatus.innerText = 'Invalid time format. Please enter a valid time in the format hh:mm.';
  };
});

/*
const alarmForm = document.getElementById('alarm-form');
const alarmInput = document.getElementById('alarm-input');
const alarmIndicator = document.getElementById('alarm-indicator');


alarmForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Get user input and validate format
    const inputRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
    const inputString = alarmInput.value.trim();
    if (!inputRegex.test(inputString)) {
      alert('Invalid time format. Please enter a valid time in the format hh:mm.');
      return;
    }
    
    // Parse user input into date object
    const [hours, minutes] = inputString.split(':').map((str) => parseInt(str));
    const alarmTime = new Date();
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    alarmTime.setSeconds(0);
    
    // Set alarm and show indicator
    localStorage.setItem('alarmTime', alarmTime.getTime());
    alarmIndicator.style.display = 'block';
    });
  
  // Check for alarm every second
  setInterval(() => {
    const alarmTime = localStorage.getItem('alarmTime');
    if (alarmTime) {
      const now = new Date();
      const timeDiff = now.getTime() - parseInt(alarmTime);
      if (timeDiff >= 0 && timeDiff < 1000) {
        playAlarm();
        localStorage.removeItem('alarmTime');
        alarmIndicator.style.display = 'none';
      }
    }
}, 1000);
*/

/* Play alarm sound
const alarmSound = new Audio('./assests/audio/alarm-01.mp3')
alarmSound.type = 'audio/wav';
*/
