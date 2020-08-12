const defaultResult = 0;

let currentResult = defaultResult;

function add(num1, num2) {
  //alert(`The result is ${num1 + num2}`);
  return num1 + num2;
}

//add(1,2);
//add(3,4);
currentResult = add(1,2);

currentResult += 10;

let calculationDescription = `(${defaultResult} += 10)`;

outputResult(currentResult,calculationDescription);
