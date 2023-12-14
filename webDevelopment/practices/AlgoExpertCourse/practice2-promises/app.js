// state -> pending, fulfilled, rejected

const promise0 = new Promise ((resolve, reject) => {
    setTimeout(() => reject(new Error('something went wrong')), 1000);
}) 

// const promise = new Promise((resolve, reject) => {
//     resolve(2);
// });


// when we chain the functions with a console.log checks if the promise was resolved or rejected
// if we catch a resolve, then we console.log the value and the state it was before
// if we catch a reject, then return the error without the value of the promise
promise0.then(console.log).catch(error => console.log('Oh no' + error))

console.log(promise); // pending

setTimeout(() => console.log(promise), 1500); // this brings the promise with the result of the promise, "2"
setTimeout(value => console.log(value)); // this just brings the value, not the entire promise


