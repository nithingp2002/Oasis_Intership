let display = document.getElementById("display");
let expression = "";

function addCharacter(character) {
  expression += character;
  display.value = expression;
}

function clearDisplay() {
  expression = "";
  display.value = "";
}

function calculate() {
    let result = eval(expression);
    expression = result.toString();
    display.value = expression;
}
