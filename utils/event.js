import { add } from "./math";
import { multiply } from "./multiply";

const eventHandler = () => {
  const addButton = document.getElementById("add");
  const multiplyButton = document.getElementById("multiply");
  const validation = document.getElementById("validation");
  const number1 = document.getElementById("number-1");
  const number2 = document.getElementById("number-2");
  const result = document.getElementById("result");

  const updateDomWithAddedNumbers = () => {
    result.innerHTML = add(number1.value, number2.value);
    let value1 = number1.value;
    let value2 = number2.value;
    validation.innerHTML =
      value1.length == 0 ? "Empty Filed. Please enter a number" : "Adding";
    validation.innerHTML =
      value2.length == 0 ? "Empty Filed. Please enter a number" : "Adding";
  };

  const updateDomWithMultiplyNumbers = () => {
    result.innerHTML = multiply(number1.value, number2.value);
    let value1 = number1.value;
    let value2 = number2.value;
    validation.innerHTML =
      value1.length == 0 ? "Empty Filed. Please enter a number" : "Multiplying";
    validation.innerHTML =
      value2.length == 0 ? "Empty Filed. Please enter a number" : "Multiplying";
  };

  addButton.addEventListener("click", updateDomWithAddedNumbers);
  multiplyButton.addEventListener("click", updateDomWithMultiplyNumbers);
};

export { eventHandler };
