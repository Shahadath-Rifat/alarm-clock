'use strict';



const clockElement = document.getElementById('clock');
const alarmForm = document.getElementById('alarm-form');
const alarmInput = document.getElementById('alarm-input');
const alarmButton = document.getElementById('button');
const alarmMessage = document.querySelector('.txt');


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
    const alarmSound = new Audio('./assets/audio/alarm.mp3');
    alarmSound.type = 'audio/mp3';
    alarmSound.muted = true;
    alarmSound.play();
    alarmSound.muted = false;
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
