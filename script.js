let botones = document.getElementsByClassName('buttons');
let operation = document.getElementById('operation');
let result = document.getElementById('result');
let textResult = '';
let num1 = 0;
let num2 = 0;
let res = 0;

function addNumbers(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 + num2;
  } else {
    return 'ERROR';
  }
}

function subNumbers(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 - num2;
  } else {
    return 'ERROR';
  }
}

function mulNumbers(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 * num2;
  } else {
    return 'ERROR';
  }
}

function divNumbers(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 / num2;
  } else {
    return 'ERROR';
  }
}

const operate = (e) => {
  // operate function - we can rework this and make sure to include floating point numbers and operations with more than 2 numbers
  // we also need to rework this to avoid using innerHTML if possible, and see if we can simplify this method
  // we need to rework this function to also accept keyboard number inputs

  //<------------ original logic from Jero's forked repo ------------>//
  let op = operation.value.toString();
  console.log(op);
  if (e.key === 'Enter') {
    sum = op.indexOf('+');
    res = op.indexOf('-');
    mul = op.indexOf('*');
    div = op.indexOf('/');
    if (sum !== -1) {
      num1 = op.substring(0, sum);
      num2 = op.substring(sum + 1);
      res = addNumbers(num1, num2);
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
    op = '0';
    resultado.innerHTML = res;

    operation.value = op;
    if (operation.value == '') {
      operation.ariaPlaceholder = '0';
    }
  }
  //<------------ we need to rework this to apply what branko taught us and to extend functionality to floating point numbers ------------>//
};

const initialiseClickHandler = () => {
  // this function should add the event listeners for the clickable UI
  operation.addEventListener('click', (e) => operate(e));
};

const initialiseKeyboardHandler = () => {
  // we need to also add event listeners for keyboard responsiveness
  operation.addEventListener('keyup', (e) => operate(e));
};

//<------------ original logic from Jero's forked repo ------------>//

/*for (let i = 0; i < botones.length; i++) {
  let element = botones[i];
  element.addEventListener('click', (e) => {
    let op = element.innerHTML.toString();
    console.log(op);
    if (op == '=') {
      sum = completo.indexOf('+');
      res = completo.indexOf('-');
      mul = completo.indexOf('*');
      div = completo.indexOf('/');
      if (sum > 0) {
        num1 = parseInt(completo.substring(0, sum));
        num2 = parseInt(completo.substring(sum + 1, completo.length));
        res = num1 + num2;
      } else if (res > 0) {
        num1 = parseInt(completo.substring(0, res));
        num2 = parseInt(completo.substring(res + 1, completo.length));
        res = num1 - num2;
      } else if (mul > 0) {
        num1 = parseInt(completo.substring(0, mul));
        num2 = parseInt(completo.substring(mul + 1, completo.length));
        res = num1 * num2;
      } else if (div > 0) {
        num1 = parseInt(completo.substring(0, div));
        num2 = parseInt(completo.substring(div + 1, completo.length));
        res = num1 / num2;
      }
      completo = '0';
      resultado.innerHTML = res;
    }

    if (op.charAt(0) == '<') {
      completo = completo.substring(0, completo.length - 1);
    } else if (op == '=') {
      completo = completo.substring(0, completo.length - 1);
    } else {
      completo += op;
    }
    operation.value = completo;
    if (operation.value == '') {
      operation.ariaPlaceholder = '0';
    }
    console.log(completo);
  });
}*/
const numberBtns = document.querySelectorAll('#Number')

// const inputNum = () => {
//   // let number = 0
//   numberBtns.forEach((button) => {
//     number = button.innerHTML
//     console.log(number)
//   })
//   document.getElementById("operation").value += number
// }


const clearCalc = () => {
  operation.value = '';
  operation.ariaPlaceholder = '0'
  console.log('clear')
}

const initialiseButtonHandler = () => {
  numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
      operation.value += parseFloat(button.innerText);
    })
  })
}




//<------------ all of this code should be in their own functions so we need to rework this logic ------------>//

const main = () => {
  initialiseClickHandler();
  initialiseKeyboardHandler();
  initialiseButtonHandler();
};

main();