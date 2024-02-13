const numberBtns = document.querySelectorAll('#Number')
const operators = document.querySelectorAll('#operator')
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

const initialiseClickHandler = () => {
  // this function should add the event listeners for the clickable UI
  operation.addEventListener('click', (e) => operate(e));
};

// Function that returns the answer based on the array of values provided and the operator
const calculate =(arr, operator)=>{
  switch (operator) {
    case '+':
      return addNumbers(arr[0], arr[1]);
      
    case '*':
     return mulNumbers(arr[0], arr[1]);
      
    case '/':
      return divNumbers(arr[0], arr[1]);
      
    case '-':
      return subNumbers(arr[0], arr[1]);
  }
}

const clearCalc = () => {
  operation.value = '';
  operation.ariaPlaceholder = '0'
  console.log('clear')
}

const initialiseButtonHandler = () => {
  numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
      operation.value += button.innerText;
    })
  })

  //adding event handlers for the operator buttons
  operators.forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.innerText.includes("Clear") ){
        //added spaces between the operators and numbers so i can split the input into an array
        operation.value += " " + button.innerText + " ";
        let numbersArr =  operation.value.split(" ")
        // Splice the array so that we now have an array for the operator and another array for the numbers
        let operatorsArr = numbersArr.splice(1, 1)  
      if(numbersArr.length > 2){
        // use calculate function to do the calculation based on the operator in the operator array
        operation.value = calculate(numbersArr, operatorsArr[0] )
        if (!button.innerText.includes('=')){
          operation.value += " " + button.innerText + " ";
        }
      }
      numbersArr.length = 0
      operatorsArr.length = 0
    }
      }
     )
  }
  )

}

//Getting Input from the keyboard
document.onkeydown = function(e){
  let numberKey = ['0','1','2','3','4','5','6','7','8','9','.']
  let operatorKeys = ['-','+','*','/','Enter']
  if ((numberKey.indexOf(e.key)>-1)){
    operation.value += e.key
  
  }else if(operatorKeys.indexOf(e.key)>-1){
    operation.value += " " + e.key + " ";
    let numbersArr =  operation.value.split(" ")
    // Splice the array so that we now have an array for the operator and another array for the numbers
    let operatorsArr = numbersArr.splice(1, 1)  
  if(numbersArr.length > 2){
    // use calculate function to do the calculation based on the operator in the operator array
    operation.value = calculate(numbersArr, operatorsArr[0] )
    if (!e.key.includes('Enter') ){
      operation.value += " " + e.key + " ";
    }
  } 
}else if (e.key == 'Backspace'){
  clearCalc()
}
}
//<------------ all of this code should be in their own functions so we need to rework this logic ------------>//

const main = () => {
  initialiseClickHandler();
  initialiseButtonHandler();
};

main();