/* Player 1: rolls a dice */
/* Player 2: rolls a dice */
/* One with the highest number wins */

let diceNumber1 = 0
let diceNumber2 = 0
let dice1_btn = document.querySelector("#dice_p1")
let dice2_btn = document.querySelector("#dice_p2")
let p1_result = document.querySelector("#p1_result")
let p2_result = document.querySelector("#p2_result")


dice1_btn.addEventListener("click", diceRoll1)

dice2_btn.addEventListener("click", diceRoll2)

function diceRoll1(){
    diceNumber1 = 1+Math.floor(Math.random()*6)
    p1_result.innerHTML = diceNumber1
    console.log(diceNumber1)
}

function diceRoll2(){
    diceNumber2 = 1+Math.floor(Math.random()*6)
    p2_result.innerHTML = diceNumber2
    console.log(diceNumber2)
}