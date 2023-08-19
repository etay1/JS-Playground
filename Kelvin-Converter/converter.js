function converter(p1) {
  var kelvin = p1;
  var celsius = kelvin - 273.15;
  var fahrenheit = (celsius * (9 / 5) + 32);
  return {
    celsius: celsius.toFixed(2),
    fahrenheit: fahrenheit.toFixed(2)
  }
}

function updateOutput() {
  var input = document.getElementById("kelvin").value;
  var conversions = converter(input);
  
  var outputElement = document.getElementById("output");
  outputElement.innerHTML = `Celsius: ${conversions.celsius}°C<br>Fahrenheit: ${conversions.fahrenheit}°F`;
}