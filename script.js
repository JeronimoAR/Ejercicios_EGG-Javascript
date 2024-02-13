const numberBtns = document.querySelectorAll("#Number");
const operators = document.querySelectorAll("#operator");
let botones = document.getElementsByClassName("buttons");
let operation = document.querySelector("input");
let result = document.getElementById("result");
let textResult = "";
let num1 = 0;
let num2 = 0;
let res = 0;

const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operatorKeys = ["-", "+", "*", "/"];

function addNumbers(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 + num2;
  } else {
    return "ERROR";
  }
}

function subNumbers(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 - num2;
  } else {
    return "ERROR";
  }
}

function mulNumbers(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 * num2;
  } else {
    return "ERROR";
  }
}

function divNumbers(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 / num2;
  } else {
    return "ERROR";
  }
}

// Function that returns the answer based on the array of values provided and the operator
const operate = (arr, operator) => {
  switch (operator) {
    case "+":
      return addNumbers(arr.shift(), arr.shift());

    case "*":
      return mulNumbers(arr.shift(), arr.shift());

    case "/":
      return divNumbers(arr.shift(), arr.shift());

    case "-":
      return subNumbers(arr.shift(), arr.shift());
  }
};

const clearCalc = () => {
  // operation.value = "";
  // operation.ariaPlaceholder = "0";
  console.log("clear");
};

const initialiseButtonHandler = () => {
  numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
      operation.value += button.innerText;
    });
  });

  //adding event handlers for the operator buttons
  operators.forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.innerText.includes("Clear")) {
        //added spaces between the operators and numbers so i can split the input into an array
        operation.value += " " + button.innerText + " ";
        let numbersArr = operation.value.split(" ");
        // Splice the array so that we now have an array for the operator and another array for the numbers
        let operatorsArr = numbersArr.splice(1, 1);
        if (numbersArr.length > 2) {
          // use operate function to do the calculation based on the operator in the operator array
          operation.value = operate(numbersArr, operatorsArr[0]);
          if (!button.innerText.includes("=")) {
            operation.value += " " + button.innerText + " ";
          } else console.log("A");
        } else console.log("B");
        numbersArr.length = 0;
        operatorsArr.length = 0;
      }
    });
  });
};

let numberStack = [];
let operatorStack = [];
let number = "";
let answer = 0;

const display = () => {
  if (numberStack.length >1) {
    answer = operate(numberStack, operatorStack.shift());
    numberStack.push(answer);
  }
  console.log("The answer is", answer);
};

const constructNumber = (n) => {
  if (number == "") {
    // if they negate the first number
    n == "-" ? (number += "-") : (number = n);
    return true;
  } 
  else if (number == "-" && n == '-') {
    number = "";
    return false;
  }
  else if (numberKeys.indexOf(n) > -1) {
    number += n;
    return true;
  } else {
    numberStack.push(parseFloat(number));
    number = "";
    return false;
  }
};

const initialiseKeyboardHandler = () => {
  //Getting Input from the keyboard
  document.onkeydown = function (e) {
    console.log(e.key);
    if (numberKeys.indexOf(e.key) > -1 || operatorKeys.indexOf(e.key) > -1) {
      console.log("A.1. IF KEYS ARE VALID");
      // positive number
      if (constructNumber(e.key)) {
        console.log("Construct a number");
      } else {
        console.log("Encounter an operator");
        operatorStack.push(e.key);
        display();
        console.log(e.key, numberStack);
      }
    } else if (e.key == "Enter" || e.key == "=") {
      if (number != "") {
        numberStack.push(parseFloat(number));
        number = "";
        display();
      }
      console.log("A.2. IF KEY IS ENTER OR EQUALS");
      console.log(number, numberStack, operatorStack);
      // answer = operate(numberStack, operatorStack.shift());
    }
    // decimal number starting with 0
    // negative number

    //   if (numberKey.indexOf(e.key) > -1) {
    //     operation.value += e.key;
    //   }
    //   if (operatorKeys.indexOf(e.key) > -1) {
    //     console.log("Operator Key:", e.key);

    //     operation.value += " " + e.key + " ";
    //     console.log("Operation vlaue:", operation.value);
    //     let numbersArr = operation.value.split(" ");
    //     // Splice the array so that we now have an array for the operator and another array for the numbers
    //     let operatorsArr = numbersArr.splice(1, 1);
    //     if (numbersArr.length > 2) {
    //       // use operate function to do the calculation based on the operator in the operator array
    //       operation.value = operate(numbersArr, operatorsArr[0]);
    //       if (!e.key.includes("Enter")) {
    //         operation.value += " " + e.key + " ";
    //       }
    //     }
    //   } else if (e.key == "Backspace") {
    //     clearCalc();
    //   }
    display();
  };
};

//<------------ all of this code should be in their own functions so we need to rework this logic ------------>//

const main = () => {
  initialiseKeyboardHandler();
  initialiseButtonHandler();
};

main();
