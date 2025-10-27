function convertTemp() {
    const input = parseFloat(document.getElementById("mainTempInput").value);
    const from = document.getElementById("temp1").value;
    const to = document.getElementById("temp2").value;
    const resultsDiv = document.getElementById("results");
    const mainResult = document.getElementById("mainResult");
    const allResults = document.getElementById("allResults");
  
    // Reset previous content and styles
    mainResult.textContent = "";
  
    // Input validation
    if (isNaN(input)) {
      mainResult.innerHTML = "⚠ Enter a valid temperature value.";
      mainResult.style.color = "#ff5555";
      mainResult.style.fontSize = "2.5rem";
     resultsDiv.style.border = "1px solid #ac1313";
     allResults.innerHTML = '';
      return;
    }
  
    if (!from || !to) {
      mainResult.innerHTML = "⚠ Select both 'From' and 'To' units.";
      mainResult.style.color = "#ff5555";
      mainResult.style.fontSize = "2.5rem";
      resultsDiv.style.border = "1px solid #ac1313";
      allResults.style.display = "none";
      return;
    }
  
    let celsius;
    // Convert input to Celsius first
    if (from === "Celsius") celsius = input;
    else if (from === "Fahrenheit") celsius = (input - 32) * 5 / 9;
    else if (from === "Kelvin") celsius = input - 273.15;
  
    // Convert Celsius to all
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;
  
    // Convert to target unit
    let resultValue;
    if (to === "Celsius") resultValue = celsius.toFixed(2) + " °C";
    else if (to === "Fahrenheit") resultValue = fahrenheit.toFixed(2) + " °F";
    else if (to === "Kelvin") resultValue = kelvin.toFixed(2) + " K";
  
    // Display results
    mainResult.innerHTML = resultValue;
    mainResult.style.color = "#ac1313";
    mainResult.style.fontSize = "5rem";
    
    // Replacing the entire innerHTML
    allResults.innerHTML = `
      <ul>
      <li>Celsius: </li>
      <li>Fahrenheit: </li>
      <li>Kelvin: </li>
      </ul>
      <ul>
      <li>${celsius.toFixed(2)} °C</li>
      <li>${fahrenheit.toFixed(2)} °F</li>
      <li>${kelvin.toFixed(2)} K</li>
      <ul/>
    `;

    allResults.style.display = "flex";
  }

  
