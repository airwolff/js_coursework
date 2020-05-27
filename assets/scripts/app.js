const defaultResult = 0;
let currentResult = defaultResult;

function add(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;
    return result;
}

currentResult = add(1, 1);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);