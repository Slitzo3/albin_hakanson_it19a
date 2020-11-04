let colorPicker = document.querySelector("#colorPicker")
let rektangel = document.querySelector("#rektangel")

console.log(rektangel)

colorPicker.addEventListener("change", colorChanger)

function colorChanger(event){
    let color = event.target.value;
    console.log(color)
    rektangel.style.backgroundColor = color
}