const BtnOn = document.querySelector("#btn-on");
const BtnOff = document.querySelector("#btn-off");
const img = document.querySelector("#img-container");

const TextOn = document.querySelector("#on");
const TextOff = document.querySelector("#off");

const body2 = document.querySelector("body2");

const container = document.querySelector("#main-container");

// botoes
function on() {
  img.setAttribute("src", "img/ligada.png");
}
function of() {
  img.setAttribute("src", "img/apagada.png");
}
// mudar background
function bodyOn() {
  let bodyElement = document.body;
  bodyElement.style.backgroundColor = "#fffb00";
}
function bodyOff() {
  let bodyElement = document.body;
  bodyElement.style.backgroundColor = "#000";
}
// border black
function bordeOn() {
  container.style.border = "4px solid black";
}
// border white
function borderOff() {
  container.style.border = "2px solid white";
}




// ações
BtnOn.addEventListener("click", () => {
  on();
  bodyOn();
  bordeOn();
  BtnOn.classList.add("hiden");
  TextOff.classList.add("hiden");
  BtnOff.classList.remove("hiden");
  TextOn.classList.remove("hiden");
});

BtnOff.addEventListener("click", () => {
  of();
  bodyOff();
  borderOff();
  BtnOff.classList.add("hiden");
  TextOn.classList.add("hiden");
  BtnOn.classList.remove("hiden");
  TextOff.classList.remove("hiden");
});
