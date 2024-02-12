let buttons = document.getElementsByClassName("buttons");
let operation = document.getElementById("operation");
let result = document.getElementById("result");
let textResult = "";
let num1 = 0;
let num2 = 0;
let res = 0;

const operate = (e) => {
  // operate function - we can rework this and make sure to include floating point numbers and operations with more than 2 numbers
  // we also need to rework this to avoid using innerHTML if possible, and see if we can simplify this method
  // we need to rework this function to also accept keyboard number inputs

  //<------------ original logic from Jero's forked repo ------------>//
  let op = operation.value.toString();
  console.log(op);
  if (e.key === "Enter") {
    sum = op.indexOf("+");
    res = op.indexOf("-");
    mul = op.indexOf("*");
    div = op.indexOf("/");
    if (sum > 0) {
      num1 = parseInt(op.substring(0, sum));
      num2 = parseInt(op.substring(sum + 1, op.length));
      res = num1 + num2;
    } else if (res > 0) {
      num1 = parseInt(op.substring(0, res));
      num2 = parseInt(op.substring(res + 1, op.length));
      res = num1 - num2;
    } else if (mul > 0) {
      num1 = parseInt(op.substring(0, mul));
      num2 = parseInt(op.substring(mul + 1, op.length));
      res = num1 * num2;
    } else if (div > 0) {
      num1 = parseInt(op.substring(0, div));
      num2 = parseInt(op.substring(div + 1, op.length));
      res = num1 / num2;
    }
    op = "0";
    result.innerHTML = res;

    operation.value = op;
    if (operation.value == "") {
      operation.ariaPlaceholder = "0";
    }
  }
  //<------------ we need to rework this to apply what branko taught us and to extend functionality to floating point numbers ------------>//
};

const initialiseClickHandler = () => {
  // this function should add the event listeners for the clickable UI
  operation.addEventListener("click", (e) => operate(e));
};

const initialiseKeyboardHandler = () => {
  // we need to also add event listeners for keyboard responsiveness
  operation.addEventListener("keyup", (e) => operate(e));
};

//<------------ original logic from Jero's forked repo ------------>//

for (let i = 0; i < buttons.length; i++) {
  let element = buttons[i];
  element.addEventListener("click", (e) => {
    let op = element.innerHTML.toString();
    console.log(op);
    if (op == "=") {
      sum = textResult.indexOf("+");
      res = textResult.indexOf("-");
      mul = textResult.indexOf("*");
      div = textResult.indexOf("/");
      if (sum > 0) {
        num1 = parseInt(textResult.substring(0, sum));
        num2 = parseInt(textResult.substring(sum + 1, textResult.length));
        res = num1 + num2;
      } else if (res > 0) {
        num1 = parseInt(textResult.substring(0, res));
        num2 = parseInt(textResult.substring(res + 1, textResult.length));
        res = num1 - num2;
      } else if (mul > 0) {
        num1 = parseInt(textResult.substring(0, mul));
        num2 = parseInt(textResult.substring(mul + 1, textResult.length));
        res = num1 * num2;
      } else if (div > 0) {
        num1 = parseInt(textResult.substring(0, div));
        num2 = parseInt(textResult.substring(div + 1, textResult.length));
        res = num1 / num2;
      }
      textResult = "0";
      result.innerHTML = res;
    }

    if (op.charAt(0) == "<") {
      textResult = textResult.substring(0, textResult.length - 1);
    } else if (op == "=") {
      textResult = textResult.substring(0, textResult.length - 1);
    } else {
      textResult += op;
    }
    operation.value = textResult;
    if (operation.value == "") {
      operation.ariaPlaceholder = "0";
    }
    console.log(textResult);
  });
}
//<------------ all of this code should be in their own functions so we need to rework this logic ------------>//

const main = () => {
  initialiseClickHandler();
  initialiseKeyboardHandler();
};

main();
