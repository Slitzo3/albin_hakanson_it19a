let name = "Albin"
let xd = "xd"
let age = "17"

console.log(`Hej ${name}, Du är ${xd}`)

if (age >= 18){
    console.log("Du är vuxen")
} else { 
    console.log("DU ÄR ETT BARN")
}

//DOM - Document Object Model
let text = document.querySelector("#text")
text.innerText = "hej"