// Assignment of 24th Feb
function runCalculator() {
    const n1 = parseFloat(prompt("Enter first number:"));
    const op = prompt("Enter operation (+, -, *, /):");
    const n2 = parseFloat(prompt("Enter second number:"));

    let result;
    if (op === '+') result = n1 + n2;
    else if (op === '-') result = n1 - n2;
    else if (op === '*') result = n1 * n2;
    else if (op === '/') result = n2 !== 0 ? n1 / n2 : "Error: Div by 0";
    else result = "Invalid Operator";

    console.log(`%c Calculation: ${n1} ${op} ${n2} = ${result}`, "color: cyan; font-weight: bold;");
    alert(`The result is: ${result}`);
}

runCalculator();