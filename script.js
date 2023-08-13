let inputElems = document.querySelectorAll("input[type='number']");
const celsiusElem = document.querySelector("#celsius");
const fahrenheitElem = document.querySelector("#fahrenheit");
const kelvinElem = document.querySelector("#kelvin");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusElem.innerHTML = "";
  fahrenheitElem.innerHTML = "";
  kelvinElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertToFahrenheit();
  convertToKelvin();
});

function convertToCelsius() {
  let inputValue = degree.value;

  if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(2)} &deg;c`;
  } else if (tempType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(2)} &deg;c`;
  }
}
function convertToFahrenheit() {
  let inputValue = degree.value;

  if (tempType.value === "celsius") {
    const CelsiusToFahrenheit = (inputValue) * (9 / 5) + 32;
    celsiusElem.innerHTML = `${CelsiusToFahrenheit.toFixed(2)} &deg;f`;
  } else if (tempType.value === "kelvin") {
    const KelvinToFahrenheit = (inputValue - 273.15) * (9 / 5) + 32;
    celsiusElem.innerHTML = `${KelvinToFahrenheit.toFixed(2)} &deg;f`;
  }
}
function convertToKelvin() {
  let inputValue = degree.value;

  if (tempType.value === "celsius") {
    const CelsiusToKelvin = (inputValue) + 273.15;
    celsiusElem.innerHTML = `${CelsiusToKelvin.toFixed(2)} &deg;k`;
  } else if (tempType.value === "fahrenheit") {
    const FahrenheitToKelvin = (inputValue - 32) * (5 / 9) + 273.15;
    celsiusElem.innerHTML = `${FahrenheitToKelvin.toFixed(2)} &deg;k`;
  }
}