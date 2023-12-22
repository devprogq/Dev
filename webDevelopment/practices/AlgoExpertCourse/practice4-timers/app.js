const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);

// function startTime() {
//     window.setInterval(() => { // we can delete window. because if it doesn't have nothing to check, default is window
//         console.log('starting');
//     }, 500)
// }

// we set an anonymous function so we can console log the starting string every 500ms

// let timerID; // we make the timerID global

// unlike intervals, timeouts just appear once in the page.

// let timeoutID = setTimeout(() => {
//     console.log('timeout');
// }, 1000)

// clearInterval doesn't work here.
// clearTimeout(timeoutID); // this code has more priority than the setTimeout, so if we clear it after we give it, it doesn't show anything

console.log(performance.now())

let animationFrameID;

function startTime(timestamp) {
    console.log(timestamp)
    // timerID = setInterval(() => { // we set the timerID to the interval of 500ms
    //     count.textContent++; // this makes the text content of 'count' increment by 1 every 500ms
    // }, 500)
    count.textContent++;
    animationFrameID = requestAnimationFrame(startTime);
}


function stopTime() {
    cancelAnimationFrame(animationFrameID)
}