/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 
let lengthConv = document.getElementById("length-conv")
let volumeConv = document.getElementById("volume-conv")
let massConv = document.getElementById("mass-conv")

let inputEl = document.getElementById("input-num")
let convertBtn = document.getElementById("convert-btn") 
let modeBtn = document.getElementById("mode-btn") 

const conversionRates = {
    meterToFeet: 3.281,
    literToGallon: 0.264,
    kilogramToPound: 2.204
}

convertUnits(inputEl.value)

convertBtn.addEventListener("click", function() {
    convertUnits(inputEl.value)
})

modeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  modeBtn.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});

function convertUnits(input) {
    if (isNaN(input)) {
        lengthConv.textContent = volumeConv.textContent = massConv.textContent = "Please enter a valid number";
        return;
    }

    // Length
    const meterToFeet = (input * conversionRates.meterToFeet).toFixed(3);
    const feetToMeter = (input / conversionRates.meterToFeet).toFixed(3);
    lengthConv.textContent = `${input} meters = ${meterToFeet} feet | ${input} feet = ${feetToMeter} meters`;

    // Volume
    const literToGallon = (input * conversionRates.literToGallon).toFixed(3);
    const gallonToLiter = (input / conversionRates.literToGallon).toFixed(3);
    volumeConv.textContent = `${input} liters = ${literToGallon} gallons | ${input} gallons = ${gallonToLiter} liters`;

    // Mass
    const kilogramToPound = (input * conversionRates.kilogramToPound).toFixed(3);
    const poundToKilogram = (input / conversionRates.kilogramToPound).toFixed(3);
    massConv.textContent = `${input} kilos = ${kilogramToPound} pounds | ${input} pounds = ${poundToKilogram} kilos`;
}