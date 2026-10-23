const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    const change = display.value.slice(0, -1);

    if (value === "AC") {
      display.value = "";
    } else if (value === "%") {
      display.value = display.value === "" ? "" : Number(display.value) / 100;
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } else if (value === "DEL") {
      display.value = display.value === "Error" ? "" : change;
    } else if (display.value === "Error") {
      display.value = value;
    } else {
      display.value += value;
    }
  });
});