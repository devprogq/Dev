function* genNumbers() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

const generator = genNumbers();

console.log(generator.next()); // value: 1, done: false -> we didn't get to the end of the function
console.log(generator.next()); // value: 2, done: false -> we didn't get to the end of the function
console.log(generator.next()); // value: 3, done: false -> we didn't get to the end of the function
console.log(generator.next()); // value: 4, done: true -> we did get to the end of the function

