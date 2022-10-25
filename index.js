/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let number = 0

let convert = document.getElementById("convert")
let metersFeet = document.getElementById("meters-feet")
let litersGallons = document.getElementById("liters-gallons")
let kilogramsPounds = document.getElementById("kilograms-pounds")
let input = document.getElementById("input")

convert.addEventListener( "click", render);

function render(){
    
    calculateMetersFeet()
    calculateLitersGallons()
    calculateKilogramsPounds()
}

function calculateMetersFeet() {
number = 0
number = input.value
metersFeet.textContent = ` ${number} meters = ${(number * 3.28084).toFixed(3)} feet | ${number} feet = ${(number * 0.3048).toFixed(3)} meters`
}

function calculateLitersGallons() {
number = 0
number = input.value
litersGallons.textContent = ` ${number} liters = ${(number * 0.264172).toFixed(3)} gallons | ${number} gallons = ${(number * 3.78541).toFixed(3)} liters`
}

function calculateKilogramsPounds() {
number = 0
number = input.value
kilogramsPounds.textContent = ` ${number} kilos = ${(number * 2.20462).toFixed(3)} pounds | ${number} pounds = ${(number * 0.453592).toFixed(3)} kilos`
}



