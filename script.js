let name = document.getElementById("name");
let saynameBtn = document.getElementById("sayName");
let changeBg = document.getElementById("changeBg");
let body = document.querySelector("body");
let resetBtn = document.getElementById("reset");

saynameBtn.addEventListener("click", () => {
    name.innerHTML = "HELLO ITS ME KAN";
})

changeBg.addEventListener("click", () => {
    body.style.backgroundColor = "yellow";
})

resetBtn.addEventListener("click", () => {
    body.style.backgroundColor = "white";
})
