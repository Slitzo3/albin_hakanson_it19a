console.log("Strings")

let fornamn = "Albin"
let efternamn = "Håkanson"
let namn = fornamn + " " + efternamn
let adress = "Kronhus gatan 9"
let stad = "Alingsås"
let telefon = 112
let alder = 105
let personnummer = 0000000


let personinfo = (`Namn: ${fornamn} $efternamn}
Ålder: ${alder}
Adress ${adress} 
Stad: ${stad}
Telefon: ${telefon}
Personnummer: ${personnummer}
`);

let p_uppgifter = document.querySelector("#personuppgifter")
p_uppgifter.innerHTML = "Namn: " +  namn + "<br>" + "Adress: " + adress + "<br>"+"Ålder: " + alder

let alfabet = "abcdefghijklmnopqrstuvwxyzåäö"
let bokstav1 = alfabet[0]
let bokstav2 = alfabet[4]

console.log(`Bokstav på index 0 är ${bokstav1}`)
console.log(`Bokstav på index 0 är ${bokstav2}`)

let antal_bokstaver = alfabet.length

console.log(`Antal bokstaver i alfabetet är ${antal_bokstaver}`)

function WordCount(str) { 
    return str.split(" ").length;
  }
  
  console.log(WordCount("Jag läser IT-programmet på NTI Kronhus i Göteborg"));
  