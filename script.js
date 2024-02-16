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
const operatorKeys = ["-", "+", "*", "/", "Enter", "=", "Backspace"];

let input = "";

let output = "";
const displayOutput = () => {
  console.log("The output is", 0);
};

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
      break;

    case "*":
      return mulNumbers(arr.shift(), arr.shift());
      break;

    case "/":
      return divNumbers(arr.shift(), arr.shift());
      break;

    case "-":
      return subNumbers(arr.shift(), arr.shift());
      break;
    case "=":
    case "Enter":
      return 0;
      break;
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

const calculate = () => {
  
};

const displayInput = () => {
  operation.value=number;
};

const constructNumber = (n) => {
  if (numberKeys.indexOf(n) > -1) {
    return true;
  } else {
    // if (operatorStack.length <= numberStack.length) {
    //   operatorStack.push(n);
    // } else{
    //   operatorStack.push(n);
    //   console.log(numberStack, operatorStack, number)
    // }
    // operatorStack.push(n);
    return false;
  }
};


const inputRules = (i) => {
  if (numberKeys.indexOf(i.key) > -1 || operatorKeys.indexOf(i.key) > -1) {
    
    if (!constructNumber(i.key)) {

      if (numberStack.length == 0 && operatorStack.length > numberStack.length  && number!=="" ) {
        let first_op = operate([0, parseFloat(number)], operatorStack.shift());
        numberStack.push(first_op);
        number = "";
      }
      
      if (i.key === "=" || i.key === "Enter") {
        // IF THE OPERATOR IS ENTER
        if (number !== "") {
          numberStack.push(parseFloat(number));
          number = "";
        }
      } else if (i.key === "Backspace") {
        // IF THE OPERATOR IS BACKSPACE
        // delete the last digit from active number
      } else {
        // IF ANY OTHER OPERATION IS USED
        if (operatorStack.length > 0 && number !== "") {
          console.log("You need to input a digit next!");
          numberStack.push(parseFloat(number));
          number = "";
          operatorStack.push(i.key);
        } else {
          console.log("You need to do something", numberStack, operatorStack);
          console.log("Number", number);
          console.log(i.key);
          operatorStack.push(i.key);
          if (parseFloat(number) > 0) {
            numberStack.push(parseFloat(number));
            number = "";
          }
        }
        // there must be a digit after the -
        // there must be a number after an operator
      }
    } else {
      // else keep constructing the number
      // if logic on the number variable
      // number += i.key;
      if (number.indexOf(".") > -1 && i.key === ".") {
        number = number;
      }
      else {
        number += i.key;
      }
    }
  }
};

const initialiseKeyboardHandler = () => {
  //Getting Input from the keyboard
  document.onkeydown = (e) => {
    displayInput(inputRules(e));
  };
};

//<------------ all of this code should be in their own functions so we need to rework this logic ------------>//

const main = () => {
  initialiseKeyboardHandler();
  initialiseButtonHandler();
};

main();
