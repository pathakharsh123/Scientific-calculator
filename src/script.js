document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");
  let currVal = "";
  function evaluate() {
    const convval = currVal
      .replace("×", "*")
      .replace("÷", "/")
      .replace("%", "*0.01")
      .replace("sin", "Math.sin")
      .replace("cos", "Math.cos")
      .replace("ln", "Math.log")
      .replace("Π", "Math.PI")
      .replace("log", "Math.log10")
      .replace("e", "Math.E")
      .replace("tan", "Math.tan")
      .replace("√", "Math.sqrt");
    const result = eval(convval);
    currVal = result.toString();
    display.value = currVal;
  }
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", () => {
      const val = button.innerText;
      try {
        if (val == "AC") {
          currVal = "";
          display.value = currVal;
        } else if (val == "=") {
          evaluate();
        } else {
          currVal += val;
          display.value = currVal;
        }
      } catch (error) {
        console.error(error);
        currVal = "ERROR";
        display.value = currVal;
      }
    });
  }
});
