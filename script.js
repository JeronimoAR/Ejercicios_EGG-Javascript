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
  console.log("The answer is", answer);

};

const constructNumber = (n) => {
  console.log(n);
  if (numberKeys.indexOf(n) > -1) {
    number+=n;
    return true;
  }
  else {
    operatorStack.push(n);
    return false;
  }
};

const inputRules = (i) => {
  if (numberKeys.indexOf(i.key) > -1 || operatorKeys.indexOf(i.key) > -1) {
    if (!constructNumber(i.key)) {
      if (operatorStack.length > 0 && operatorStack[0]==="-" && number!=="") {
        let neg_sum = operate([0, number], operatorStack.shift());
        number = neg_sum;
      }
    }  // else do nothing because the number is being constructed
  } else if (i.key === "Enter" || i.key === "=") {
      // operatorStack.shift();
      // console.log("The numberStack is:", numberStack);
      // console.log("The operatorSack is:", operatorStack);
    }
    else if (i.key == "Backspace") {

    }
}

const initialiseKeyboardHandler = () => {
  //Getting Input from the keyboard
  document.onkeydown = (e) => inputRules(e);
};

//<------------ all of this code should be in their own functions so we need to rework this logic ------------>//

const main = () => {
  initialiseKeyboardHandler();
  initialiseButtonHandler();
};

main();
