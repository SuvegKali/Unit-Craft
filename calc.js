let currentInput = '';
let display = document.getElementById('display');

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendSymbol(symbol) {
  currentInput += symbol;
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput;
}

function applyBackgroundColor(number) {
    if (number > 0 && number < 4) {
      // Apply background color #e68a00
      display.style.backgroundColor = '#942323';
    } else if (number >= 4 && number < 8) {
      // Apply another background color for this range
      display.style.backgroundColor = '#5b2394';
    } else {
      // Default background color or handle other ranges
      display.style.backgroundColor = '#5b2394';
    }
  }