const numberBtns = document.querySelectorAll("#Number");
// const operators = document.querySelectorAll("#operator");
const multiply_button = document.getElementById("multiply");
const add_button = document.getElementById("add");
const divide_button = document.getElementById("divide");
const subtract_button = document.getElementById("subtract");

let botones = document.getElementsByClassName("buttons");
let operation = document.querySelector("input");
let result = document.getElementById("result");
let textResult = "";
let num1 = 0;
let num2 = 0;
let res = 0;

const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operatorKeys = ["-", "+", "*", "/", "Enter", "=", "Backspace"];

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
      return answer;
      break;
  }
};

const clear = () => {
  // operation.value = "";
  // operation.ariaPlaceholder = "0";
  // console.log("clear");
  answer = 0;
  number = "";
  numberStack = [];
  operatorStack = [];
  displayActiveOperator("Enter");
};

const backspace = () => {
  const temp = number.split('');
  temp.splice(-1,1);
  number = temp.join('');
}

const initialiseButtonHandler = () => {

  // numberBtns.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     operation.value += button.innerText;
  //   });
  // });

  //adding event handlers for the operator buttons
  // operators.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     if (!button.innerText.includes("Clear")) {
  //       //added spaces between the operators and numbers so i can split the input into an array
  //       operation.value += " " + button.innerText + " ";
  //       let numbersArr = operation.value.split(" ");
  //       // Splice the array so that we now have an array for the operator and another array for the numbers
  //       let operatorsArr = numbersArr.splice(1, 1);
  //       if (numbersArr.length > 2) {
  //         // use operate function to do the calculation based on the operator in the operator array
  //         operation.value = operate(numbersArr, operatorsArr[0]);
  //         if (!button.innerText.includes("=")) {
  //           operation.value += " " + button.innerText + " ";
  //         } else console.log("A");
  //       } else console.log("B");
  //       numbersArr.length = 0;
  //       operatorsArr.length = 0;
  //     }
  //   });
  // });
};

let numberStack = [];
let operatorStack = [];
let number = "";
let answer = 0;

const calculate = (terminate) => {
  console.log("Calculate the answer!");

  if (!terminate) {
    for (let i = 0; i < operatorStack.length; i++) {
      answer = operate(numberStack, operatorStack.shift());
      displayOutput(answer);
      numberStack.push(answer);
    }
    console.log("Don't terminate. Update the answer");
  } else {
    console.log("Terminate. Update the answer");
    answer = operate(numberStack, operatorStack.shift());
    displayOutput(answer);
    numberStack.push(answer);
  }
};

const displayInput = () => {
  operation.value = number;
};
const displayOutput = (answer) => {
  result.innerText = answer;
};

const constructNumber = (n) => {
  if (numberKeys.indexOf(n) > -1) return true;
  else return false;
};

const displayActiveOperator = (operator) => {
  switch (operator) {
    case "+":
      add_button.classList.add("active");
      subtract_button.classList.remove("active");
      multiply_button.classList.remove("active");
      divide_button.classList.remove("active");
      break;
    case "*":
      add_button.classList.remove("active");
      subtract_button.classList.remove("active");
      multiply_button.classList.add("active");
      divide_button.classList.remove("active");
      break;
    case "-":
      add_button.classList.remove("active");
      subtract_button.classList.add("active");
      multiply_button.classList.remove("active");
      divide_button.classList.remove("active");
      break;
    case "/":
      add_button.classList.remove("active");
      subtract_button.classList.remove("active");
      multiply_button.classList.remove("active");
      divide_button.classList.add("active");
      break;
    case "=":
    case "Enter":
      add_button.classList.remove("active");
      subtract_button.classList.remove("active");
      multiply_button.classList.remove("active");
      divide_button.classList.remove("active");
  }
};

const inputRules = (i) => {
  if (numberKeys.indexOf(i.key) > -1 || operatorKeys.indexOf(i.key) > -1) {
    if (!constructNumber(i.key)) {
      if (
        numberStack.length == 0 &&
        operatorStack.length > numberStack.length &&
        number !== ""
      ) {
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
        displayActiveOperator(i.key);
        calculate(true);
      } else if (i.key === "Backspace") {
        // IF THE OPERATOR IS BACKSPACE
        backspace();
      } else {
        // IF ANY OTHER OPERATION IS USED
        if (operatorStack.length > 0 && number !== "") {
          console.log("You need to input a digit next!");
          numberStack.push(parseFloat(number));
          number = "";
          operatorStack.push(i.key);

          console.log(i.key);
          displayActiveOperator(i.key);
        } else {
          // console.log("Operator/number handling", numberStack, operatorStack, '\n', "Number:", number, '\n', "Key:", i.key);
          // EDGE CASE
          if (number !== "" && parseFloat(number) > 0) {
            numberStack.push(parseFloat(number));
            number = "";
          }
          // console.log("operatorStack vs numberStack length", operatorStack.length, numberStack.length);
          // OPERATOR RULE 1 - YOU CAN'T START WITH *, / OR +
          // OPERATOR RULE 2 - YOU MUST OVERWRITE OPERATORS INSTEAD OF ADDING TOO MANY
          if (
            number === "" &&
            numberStack.length === 0 &&
            (i.key === "*") | (i.key === "/") | (i.key === "+")
          ) {
            console.log("No operators as first input");
          } else if (operatorStack.length == numberStack.length) {
            console.log("More operators than numbers!");
            operatorStack.splice(-1, 1, i.key);
            console.log(operatorStack.slice(-1)[0]);
            displayActiveOperator(operatorStack.slice(-1)[0]);
          } else {
            operatorStack.push(i.key);
            console.log(i.key);
            displayActiveOperator(i.key);
          }
        }
      }
    } else {
      // else keep constructing the number
      // if logic on the number variable
      // number += i.key;
      number.indexOf(".") > -1 && i.key === "."
        ? (number = number)
        : (number += i.key);
      // if (number.indexOf(".") > -1 && i.key === ".") {
      //   number = number;
      // }
      // else {
      //   number += i.key;
      // }
    }
  }
};

const initialiseKeyboardHandler = () => {
  //Getting Input from the keyboard
  document.onkeydown = (e) => {
    displayInput(inputRules(e));
    if (numberStack.length > 1) calculate(false);
  };
};

//<------------ all of this code should be in their own functions so we need to rework this logic ------------>//

const main = () => {
  initialiseKeyboardHandler();
  // initialiseButtonHandler();
};

main();
