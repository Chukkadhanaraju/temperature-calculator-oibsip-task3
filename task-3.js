function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result;

    if (isNaN(temperatureInput)) {
        document.getElementById("result").innerText = "Please enter a valid temperature.";
        return;
    }

    switch (unit) {
        case "celsius":
            resultF = (temperatureInput * 9/5) + 32; // Celsius to Fahrenheit
            resultK = temperatureInput + 273.15; // Celsius to Kelvin
            document.getElementById("result").innerText = `${temperatureInput}°C is equal to ${resultF.toFixed(2)}°F and ${resultK.toFixed(2)} K`;
            break;
        case "fahrenheit":
            resultC = (temperatureInput - 32) * 5/9; // Fahrenheit to Celsius
            resultK = resultC + 273.15; // Celsius to Kelvin
            document.getElementById("result").innerText = `${temperatureInput}°F is equal to ${resultC.toFixed(2)}°C and ${resultK.toFixed(2)} K`;
            break;
        case "kelvin":
            resultC = temperatureInput - 273.15; // Kelvin to Celsius
            resultF = (resultC * 9/5) + 32; // Celsius to Fahrenheit
            document.getElementById("result").innerText = `${temperatureInput} K is equal to ${resultC.toFixed(2)}°C and ${resultF.toFixed(2)}°F`;
            break;
        default:
            document.getElementById("result").innerText = "Please select a valid unit.";
    }
}
