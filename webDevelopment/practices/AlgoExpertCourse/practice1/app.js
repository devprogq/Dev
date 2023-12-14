const button = document.querySelector('button');

const abortController = new AbortController();

// dblclick = double click
// mousedown = just when the button is pressed
// mouseup = just when the button is released

button.addEventListener('click', onClick, {
    capture: true, // captures the exact moment that the button makes the action
    once: true, // just captures once
    passive: true, // doesn't make the default use, (optimization for mobile pages more often)
    signal: abortController.signal, 
});

abortController.abort(); // removes the eventListener

button.removeEventListener('click', onClick); // removes the event manually.

document.body.addEventListener('click', onClick);

// this function when you do click on the button it says "you clicked the button in the console"

function onClick(event) {
    console.log(event);
    console.log(event.type); 
    console.log(event.target); // says what is clicked on "event propagation"
    console.log(this); // says the attributed thing before the button is clicked on
    console.log('you clicked the button');
    event.stopPropagation(); //this stop the propagation during the target phase, not doing the capture phase
}

// another common events

// keyup = just when the letter is released

window.addEventListener('keydown', event => {
    console.log(event.code)
})

const scrollable = document.getElementById('scrollable');

// scrollable.addEventListener('scroll', event => {
//     console.log(event.target.scrollTop);
// })

// scrollable.addEventListener('mouseenter', event => {
//     console.log(event.pageX, event.pageY);
// })

scrollable.addEventListener('mousemove', event => {
    console.log(event.pageX, event.pageY);
})
