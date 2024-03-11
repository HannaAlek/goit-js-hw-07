function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body=document.querySelector('body');
const btn=document.querySelector('.change-color');
const span=document.querySelector('.color');

function changeColorHandler(event) {
  body.style.backgroundColor=getRandomHexColor();
  span.textContent=getRandomHexColor();
}

btn.addEventListener('click', changeColorHandler)