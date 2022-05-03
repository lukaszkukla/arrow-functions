/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code block
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => {
    // Code block
    return a + b;
}

let sum2 = addTwoNumbers2(3, 6);
console.log(sum2);

// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a, b) => a + b;

let sum3 = addTwoNumbers3(3, 7);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Arrrgh...!')

const saySomething2 = () => console.log('Arrrgh....!');
saySomething2();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        Multiline string
        starts here and there.
    </p>`
);
console.log(returnMultipleLines());