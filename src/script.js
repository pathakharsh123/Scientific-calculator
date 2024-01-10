document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");
  let currVal = "";
  function evaluate() {
    const convval = currVal
      .replace("×", "*")
      .replace("÷", "/")
      .replace("%", "*0.01");
    const result = eval(convval);
    currVal = result.toString();
    display.value = currVal;
  }
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", () => {
      const val = button.innerText;
      if (val == "AC") {
        currVal = "";
        display.value = currVal;
      } else if (val == "=") {
        evaluate();
      } else {
        currVal += val;
        display.value = currVal;
      }
    });
  }
});
