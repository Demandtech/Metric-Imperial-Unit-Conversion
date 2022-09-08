
let meter = 3.281 
let liter = 0.264
let kilogram = 2.204 
let inputEl  = document.getElementById("input");
let resultOne = document.getElementById("result-one");
let resultTwo = document.getElementById("result-two");
let resultThree = document.getElementById("result-three");
const btn = document.getElementById("btn");



function render() {
   
   renderOne(meter, liter, kilogram)
}

function renderOne(meters, liters, kilograms) {
   let baseValue = inputEl.value
   let meterValue =  baseValue * meters;
   let metersValues = meterValue.toFixed(3)
   let feetValue = baseValue / meters;
   let feetsValues = feetValue.toFixed(3)
   let gallonValue = baseValue * liters;
   let gallonsValues = gallonValue.toFixed(3);
   let literValue = baseValue / liters;
   let litersValues = literValue.toFixed(3);
   let kiloValue = baseValue * kilograms;
   let kilosValues = kiloValue.toFixed(3);
   let poundValue = baseValue / kilograms;
   let poundsValues = poundValue.toFixed(3);
    
    if(baseValue < 1) {
     resultOne.textContent = "Enter Number Value"
     resultTwo.textContent = "Enter Number Value";
     resultThree.textContent = "Enter Number Value";
    } else {
       resultOne.textContent = `${baseValue} meters = ${metersValues} feet | ${baseValue} feets = ${feetsValues} meters`;
       resultTwo.textContent = `${baseValue} liters = ${gallonsValues} gallons | ${baseValue} Gallons = ${litersValues } liters`;
       resultThree.textContent = `${baseValue} kilo = ${kilosValues} pounds| ${baseValue} Pounds = ${poundsValues} kilos`;
    }
}







