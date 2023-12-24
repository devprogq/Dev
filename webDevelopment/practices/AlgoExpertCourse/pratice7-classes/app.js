// object inheritance from other object rather than other prints classes
// the classes are "objects"

// prototypal constructor

const person = {
    isHuman: true,
}

// const child = Object.create(person)
// child.maxAge = 18;

// set the prototype and declare their values of another parts of the object
const child = Object.assign(Object.create(person), {
    maxAge: 18,
});

// const child = {
//     maxAge: 18;
// }

// this is very slow, is better to set the prototype when we define the object
// Object.setPrototypeOf(child, person) // first we put the object we want to set the prototype of and what we want to be the prototype

console.log(person);
console.log(person.maxAge); // the first object doesn't inherit from the newer object

console.log(child.isHuman);
console.log(child.maxAge);

// function constructor

function Person(name) {
    this.name = name;
}

// we define the same prototype in each new value of the object

Person.prototype = {
    constructor: Person,
    isHuman: true,
}

const conner = new Person('Conner');
const clement = new Person('Clement'); // creates a new object with the value of the prototype of "Person" but changes the value with the new defining


console.log(conner)

Person.prototype.speak = function() {
    console.log('Hello this is ' + this.name);
}

conner.speak();
clement.speak();

console.log(conner instanceof Person);
// true, conner was an instanceof Person (the object is working on with the prototype)


// lets imagine push function doesn't work
Array.prototype.myPush = function(value) {
    this[this.length] = value;
}

const arr = [1, 2, 3];
arr.myPush(4);

// classes

class Person1 {
    static isHuman = true; // if is a static value, is just for the class, not for the new object created afterwards
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log('Hello this is ' + this.name);
    }
    // get name() { 
    //     return this.name
    // }
    // set name() {
    //     this.name = name;
    // }
}

const lautaro = new Person1('Lautaro');
lautaro.speak();

class Child extends Person1 { // extends creates a exact same class with the other instance we put in
    #age; // pound sign, makes it private, just is accessible inside of the class, not outside, even in extended functions
    constructor(name, age) {
        super(name);
        this.#age = age;
    }
}

// class GrandChild extends Child {
//     getAge() {
//         console.log(this.#age); // we can't access to the age value
//     }
// }

console.log(child instanceof Person1); // true