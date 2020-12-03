console.log("Hej")
let slumptal = Math.random()

console.log(slumptal)

let coinflip = Math.round(slumptal) 

console.log(`Coin flip ${coinflip}`)

if (coinflip == 0)
console.log("You got tails")

else if (coinflip == 1)
console.log("You got head")

let tarning = Math.floor(Math.random() * 7);

console.log(`Du slog en tärning och fick ${tarning}`)

let sexor = 0

for (let i = 0; i <1000000; i++){
    let tarning = Math.floor(Math.random()*6)+1

    if (tarning == 6){
        sexor++;
    }

}

console.log(`Antalet sexor är: ${sexor}`)

let andel = sexor/1000000
console.log(andel)
console.log(`Teoretiskt sannolikhet ${1/6}`)