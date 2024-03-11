const userName=document.querySelector('#name-input');
const output=document.querySelector('#name-output');
userName.addEventListener('input', (event)=>{

    if(event.target.value.trim()!==""){
        output.textContent=event.target.value}
    else output.textContent="Anonimous";
    }
)
