const form=document.querySelector('.login-form');
function formHandler(event){
    event.preventDefault();
    const data={
        email:event.target.elements.email.value.trim(),
        password:event.target.elements.password.value.trim(),
    }
    if(data.email===""||data.password===""){
        alert('All form fields must be filled in')
    }
    console.log(data)
    form.reset()
}
form.addEventListener('submit', formHandler)
