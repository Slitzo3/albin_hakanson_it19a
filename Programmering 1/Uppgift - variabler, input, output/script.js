let name = prompt("vad heter du?")
let age = prompt("hur gammal är du?")
let adress1 = prompt("vad är din adress?")
let postnumber = prompt("vad är ditt postnummer?")
let city = prompt("vilken stad bor du i?")
let phonenumber = prompt("vad är ditt nummer?")

let namn = document.querySelector("#namn")
namn.innerHTML = `Namn: ${name}`

let alder = document.querySelector("#alder")
alder.innerHTML = `Ålder: ${age}`

let adress = document.querySelector("#adress")
adress.innerHTML = `Adress: ${adress1} ${postnumber} ${city}`

let postnummer = document.querySelector("#postnummer")
postnummer.innerHTML = `Postnummer: ${postnumber}`

let stad = document.querySelector("#stad")
stad.innerHTML = `Stad: ${city}`

let nummer = document.querySelector("#nummer")
nummer.innerHTML = `Telefon nummer: ${phonenumber}`