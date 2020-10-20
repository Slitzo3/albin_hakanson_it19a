let p_siffra = document.querySelector("#siffra");
let upp = document.querySelector("#uppKnapp");
let ned = document.querySelector("#nedKnapp");
let reset = document.querySelector("#resetKnapp");
let p_tecken = document.querySelector("#tecken");

let siffra = 0;

p_siffra.innerHTML = siffra;
p_tecken.innerHTML = "Noll";

upp.addEventListener("click", raknaUpp);
ned.addEventListener("click", raknaNed);
reset.addEventListener("click", resetNummer);

function raknaUpp() {
    siffra = siffra + 1;
    p_siffra.innerHTML = siffra;
    teckenCheck();
}

function raknaNed() {
    siffra = siffra - 1;
    p_siffra.innerHTML = siffra;
    teckenCheck();
}

function resetNummer() {
    siffra = 0;
    p_siffra.innerHTML = 0;
    teckenCheck();
}

function teckenCheck() {
    if (siffra < 0){
        p_tecken.innerHTML = "Negativt";
        p_siffra.style.color = "darkred";
    } else if (siffra > 0){
        p_tecken.innerHTML = "Positivt";
        p_siffra.style.color = "green";
    } else {
        p_tecken.innerHTML = "Noll";
        p_siffra.style.color = "blue";
    }
}