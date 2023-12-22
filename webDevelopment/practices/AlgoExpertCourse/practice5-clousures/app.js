const globalNum = 5;

function logNum() {
    const localNum = 1;
    console.log(globalNum + localNum); // this function has access to the global variable, and uses it to make the function work
}

logNum(); // output = 6

