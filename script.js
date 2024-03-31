document.getElementById("number").addEventListener("input", function () {
  const number = document.getElementById("number").value;
  const outputText = validateAndConvert(number);
  displayResult(outputText);
});

document.getElementById("convert-btn").addEventListener("click", function () {
  const number = document.getElementById("number").value;
  const outputText = validateAndConvert(number);
  displayResult(outputText);
});

function displayResult(outputText) {
  const resultContainer = document.getElementById("result-container");
  const outputElement = document.getElementById("output");
  const errorElement = document.getElementById("error");

  if (outputText.startsWith("Please")) {
      errorElement.textContent = outputText;
      outputElement.innerText = '';
  } else {
      errorElement.textContent = '';
      outputElement.innerText = outputText;
  }

  resultContainer.style.display = outputText ? "block" : "none";
}

function validateAndConvert(num) {
  num = parseInt(num, 10);
  if (isNaN(num)) return "Please enter a valid number";
  if (num <= 0) return "Please enter a number greater than 0";
  if (num > 3999) return "Number must be less than or equal to 3999";
  return convertToRoman(num);
}

document.getElementById("convert-btn").addEventListener("click", function () {
  let number = document.getElementById("number").value;
  let outputText = validateAndConvert(number);
  let resultContainer = document.getElementById("result-container");
  let outputElement = document.getElementById("output");

  outputElement.innerText = outputText;
  resultContainer.style.display = outputText ? "block" : "none";
});

function validateAndConvert(num) {
  num = parseInt(num, 10);
  if (isNaN(num)) {
    return "Please enter a valid number";
  } else if (num <= 0) {
    return "Please enter a number greater than or equal to 1";
  } else if (num > 3999) {
    return "Please enter a number less than or equal to 3999";
  } else {
    return convertToRoman(num);
  }
}

function convertToRoman(num) {
  const numeralCodes = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";
  numeralCodes.forEach((pair) => {
    while (num >= pair[1]) {
      result += pair[0];
      num -= pair[1];
    }
  });
  return result;
}