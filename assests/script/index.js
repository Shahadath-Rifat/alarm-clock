'use strict';

const clock = document.getElementById('clock');


// Update clock every second
setInterval(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clock.textContent = timeString;
}, 1000);

