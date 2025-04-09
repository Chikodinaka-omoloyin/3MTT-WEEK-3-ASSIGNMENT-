const display = document.getElementById("display");
const buttons = document.querySelectorAll(".icon");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("value");
    if (value) {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

equalBtn.addEventListener("click", () => {
  try {
    const result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
  } catch {
    display.textContent = "Error";
    currentInput = "";
  }
});

clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.textContent = "0";
});

