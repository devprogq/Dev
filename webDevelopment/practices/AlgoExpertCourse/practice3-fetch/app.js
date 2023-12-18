// const BASE_API = 'http://localhost:8080/api' EXAMPLE OF AN API

console.log(fetch(BASE_API)) // output promise {pending}

fetch(BASE_API).then(console.log())

fetch(BASE_API)
.then(res => res.text()) // MAKES THE RESPONSE OF THE FETCH IN A TEXT
.then(console.log) // THEN SHOWS IT IN THE CONSOLE
.catch(error => console.error('Oh no: ' + error)) // IF IT CATCHES AN ERROR, RETURN ERROR

console.log('after fetch')