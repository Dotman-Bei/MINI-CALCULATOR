function multiply () {
    const firstNumber = numberOne.value;
    const secondNumber = numberTwo.value;
    const product = firstNumber * secondNumber
    console.log(product);
    output.innerHTML = product
}

function divide() {
    const firstNumber = numberOne.value;
    const secondNumber = numberTwo.value;
    const quotient = firstNumber / secondNumber
    console.log(quotient);
    output.innerHTML = quotient
}

function minus() {
    const firstNumber = numberOne.value;
    const secondNumber = numberTwo.value;
    const difference = firstNumber - secondNumber
    console.log(difference);
    output.innerHTML = difference
}

function add() {
    const firstNumber = Number (numberOne.value);
    const secondNumber = Number (numberTwo.value);
    const sum = firstNumber + secondNumber
    console.log(sum);
    output.innerHTML = sum
}