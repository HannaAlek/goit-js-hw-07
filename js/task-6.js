function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate=document.querySelector('button[data-create]');
const btnDestroy=document.querySelector('button[data-destroy]');
const boxes=document.querySelector('#boxes');
const input=document.querySelector('input');

function createBoxes(amount){
  amount=Number(input.value);
  if(amount<1 || amount>100){return}

const square=document.createDocumentFragment();
for (let i=0; i<amount; i++){
  let size=30+i*10;
  const box=document.createElement('div');
  box.style.width=`${size}px`;
  box.style.height=`${size}px`;
  box.style.backgroundColor=getRandomHexColor();
  square.append(box);
}
boxes.innerHTML="";
boxes.append(square);
input.value="";
}
function destroyBoxes(event){
  boxes.innerHTML=""
}

btnCreate.addEventListener('click', createBoxes)
btnDestroy.addEventListener('click', destroyBoxes)