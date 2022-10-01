

const inputs = document.querySelectorAll('#form input')

const expresiones = {
    nombre= //revisar las expresiones que puedo aplicar
    email=
}

const validarCampo = {}

const validarFormulario = (e)=>{
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
        default: 
            alert('Ingresa tu nombre y correo electronico')//este alert llevaria sweet alert
        break;
    }
}

//evento on key up y blur para validar campos escenciales
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
});
