let vikt = prompt("Hur mycket väger ditt bagage?")
let langd = prompt("Hur långt är ditt bagage?")
let bredd = prompt("Hur brett är ditt bagage?")
let hojd = prompt("Hur högt är ditt bagage?")


if (vikt <= 8, langd <= 55, bredd <= 40, hojd <= 23) {

console.log("Ditt bagage är godkänt")
let godkant = document.querySelector("#bagage")
bagage.innerHTML = `Ditt bagage är godkänt`

} else {
    console.log("Ditt bagage är inte godkänt")
    let integodkant = document.querySelector("#bagage")
    bagage.innerHTML = `Ditt bagage är inte godkänt`
}