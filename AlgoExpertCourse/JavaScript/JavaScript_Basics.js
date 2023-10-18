// we declarate the variable with let
let num = 10;
// we declarate consts so it can't change its value
const num1 = 10;

console.log(num)
console.log(num1)

// if we want to change it just call the name and change the value
num = 20;

console.log(num)

// ******************

let float = 10.5
let strNum = '10'

console.log(Math.floor(float))
console.log(Math.round(float))
console.log(Math.random())
console.log(Number(strNum)) // checks if its a number and if doesn't is gives NaN (Not a Number)
console.log(parseInt(strNum)) // checks for numbers and makes it an int

console.log(float + 10)
console.log(float - 10)
console.log(float * 10)
console.log(float / 10)
console.log(float % 10)

console.log(float == 10) // equality = just the value
console.log(float === 10) // strict-equality = compares the value and the type

console.log(float <= 10) // false
console.log(float <= 10.5) // true

console.log(Math.pow(2, 3)) // 2 at the power of 3.
console.log(Math.sqrt(10)) // 10 at square root.

console.log(typeof 100) // typeof gives us the output of what is the type of the variable that we put afterwards

// ********************

let str = 'abcd'

console.log(str + 'efg') // output = abcdefg

console.log(str > 'efg') // output = true, because the lenght is greater

console.log(str === "abcd") 

console.log('Hello this is a single quote: \'') // the \ says that the quote isn't finishing the string inside the log.

console.log(`Hello
World`) // template literal, this allows to also give values inside

console.log(`Result: ${10 + 20}`) // output = Result: 30

console.log('This is a very ' + 
            'long string') 

// ******************

let string = 'abcd'

console.log(str[1]) // output = b

console.log(str.includes(b)) // output = true

console.log(str.startsWith(a)) // output = true
console.log(str.endsWith(d)) // output = true

console.log(str.toUpperCase()) // output = ABCD
console.log(str.toLowerCase()) // output = abcd

console.log(str.slice(1)) // output = bcd

console.log(str.padStart(10, '-')) // this creates a string with the lenght of the first value we atribute, if isn't this long, we complete with the second string we atribute to the function.

console.log(str.trim()) // this trims all white spaces
console.log(str.trimEnd()) // this trims all white spaces at the end
console.log(str.trimStart()) // this trims all white spaces at the start

// *************************

const person = {
    name: 'Lautaro',
    course: 'FrontendExpert',
};

console.log(person) // output = {name: 'Lautaro', course: 'FrontendExpert'}

console.log(JSON.stringify(person)) // this converts the object into a string for a JSON FILE
console.log(JSON.parse(JSON.stringify(person))) // this converts the string before created to a object again.

person.name = 'Lautaro2' // we can change the inside of a const, not the name of the const itself.
console.log(person.name) // output = Lautaro2

const map = new Map()
map.set(123, 'hello')
map.set(456, 'world')
console.log(map.get(123)) // output = hello
console.log(map.get(456)) // output = world
console.log(map.size) // output = 2

const set = new Set()
set.add('hello')
// set.delete('hello') // deletes all 'hello' in the Set.
set.add('world')
console.log(set.has(hello)) // output = true
console.log(set) // output = hello, world
console.log(set.size) // output = 2

// **********************

const arr = [1, 2, 3]

arr.push(4)

console.log(arr) // output = 1, 2, 3, 4
console.log(arr.length) // output = 4
console.log(arr[1]) // output = 2
console.log(typeof arr) // output = object

function addTwo(num) {
    return num + 2;
}

function addTwo(num1 = 6) {
    return num1 + 2;
}

// if no input is inserted, we automatically set the value of 6

callFunc(addTwo, 10)
// we call the Func addTwo, and we set the parameter num1 to 10 so it gives output = 12

console.log(addTwo instanceof Object) // output = True
// this verifies if the function if an Object

// ********************

for (let i = 0; i < 4; i++) {
    console.log(i)
    if (i == 1) {
        break
    }
}

let j = 0;
while (j < 4) {
    console.log(j)
    j++
}

let k = 0;
do {
    console.log(k)
    k++
}
while (k < 4)

// ****************

for (const value of [1, 2, 3]) {
    console.log(value)
}

for (const value of 'abc') {
    console.log(value)
}

const obj = {
    name: 'Lautaro',
    course: 'FrontendExpert',
}

for (const key in obj) {
    console.log(key) 
    // output = name \n course
}

for (const key in obj) {
    console.log(obj[key])
    // output = Lautaro \n FrontendExpert
}

for (const key in obj) {
    console.log(ket, obj[key])
    // output = name Lautaro \n course FrontendExpert
}

// anonymous function sintax

[1, 2, 3].forEach(function(value) {
    console.log(value)
}) 

// ***********************
// conditionals

// if operator
const condition = true

if (condition) {
    console.log('It was true')
} else {
    console.log('It was false')
}

const condition1 = null // equal to false

if (condition1) {
    console.log('It was true')
} else {
    console.log('It was false')
}


// switch operator
const myNum = 2

switch (myNum) {
    case 1:
        console.log('It was 1')
        break
    case 2:
        console.log('It was 2')
        break
    default:
        console.log('Default')
}

const myNum1 = 10

// ternary operator
console.log(myNum1 > 5 ? 'Greater than 5' : 'Less than 5')