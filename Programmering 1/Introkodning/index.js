let name = "Albin"
let text1 = "xd"
let age = "17"

console.log(`Hej ${name}, Du är ${text1}`)

if (age >= 18){
    console.log("Du är vuxen")
} else { 
    console.log("DU ÄR ETT BARN")
}

//DOM - Document Object Model
let text = document.querySelector("#text")
text.innerHTML = `${name} är ${age} år gammal`