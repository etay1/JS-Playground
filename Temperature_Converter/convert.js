window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   let convertButton = document.getElementById("convertButton");

   convertButton.addEventListener("click", () => {
      let celsiusInput = document.getElementById("cInput");
      let fahrenheitInput = document.getElementById("fInput");
      let errorMessage = document.getElementById("errorMessage");

      let celsiusValue = parseFloat(celsiusInput.value);
      let fahrenheitValue = parseFloat(fahrenheitInput.value);



      if (!isNaN(celsiusValue)) {
         let convertedFahrenheit = convertCtoF(celsiusValue);
         fahrenheitInput.value = convertedFahrenheit;
         errorMessage.innerHTML = "";
      } else if (!isNaN(fahrenheitValue)) {
         let convertedCelsius = convertFtoC(fahrenheitValue);
         celsiusInput.value = convertedCelsius;
         errorMessage.innerHTML = "";
      } else {
         const errorValue = celsiusInput.value
         ? celsiusInput.value
         : fahrenheitInput.value
         ? fahrenheitInput.value
         : null;
         errorMessage.innerHTML = `${errorValue} is not a number`;
      }


      changeIcon();
   });
   
   let celsiusInput = document.getElementById("cInput");
   let fahrenheitInput = document.getElementById("fInput");
   
   celsiusInput.addEventListener("input", () => {
      errorMessage.innerHTML = "";
      fahrenheitInput.value = "";});

   fahrenheitInput.addEventListener("input", () => {
      errorMessage.innerHTML = "";
      celsiusInput.value = "";});

}


function convertCtoF(degreesCelsius) {
   degreesFahrenheit = (degreesCelsius * 9/5) + 32;
   return degreesFahrenheit;

}

function convertFtoC(degreesFahrenheit) {
   degreesCelsius = (degreesFahrenheit - 32) * 5/9;
   return degreesCelsius;
}

function changeIcon() {
   const icon = document.getElementById("weatherImage");
   const celsiusInput = document.getElementById("cInput").value;
   const fahrenheitInput = document.getElementById("fInput").value;
   
   let temperature;

   if (celsiusInput !== "") {
      const celsiusValue = parseFloat(celsiusInput);
      if (!isNaN(celsiusValue)) {
         temperature = convertCtoF(celsiusValue);
      }
   } else if (fahrenheitInput !== "") {
      const fahrenheitValue = parseFloat(fahrenheitInput);
      if (!isNaN(fahrenheitValue)) {
         temperature = fahrenheitValue;
      }
   }

   if (temperature !== undefined) {
      if (temperature < 32) {
         icon.src = "cold.png";
      } else if (temperature >= 32 && temperature <= 50) {
         icon.src = "cool.png";
      } else if (temperature > 50) {
         icon.src = "warm.png";
      } else {
         icon.src = "";
      }
   } else {
      icon.src = "";
   }
}
