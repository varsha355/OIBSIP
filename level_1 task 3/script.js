function convertTemperature() {
  const temperatureInput = document.getElementById("temperature");
  const unitSelect = document.getElementById("unit");
  const resultDiv = document.getElementById("result");

  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  let convertedTemperature;
  let convertedUnit;

  if (isNaN(temperature)) {
    resultDiv.textContent = "Please enter a valid temperature.";
    return;
  }

  if (unit === "celsius") {
    convertedTemperature = (temperature - 32) * (5 / 9);
    convertedUnit = "°C";
  } else if (unit === "fahrenheit") {
    convertedTemperature = (temperature * 9) / 5 + 32;
    convertedUnit = "°F";
  }

  resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}

