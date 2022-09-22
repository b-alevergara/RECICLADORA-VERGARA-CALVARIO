//evento submit para mandar la info capturada del form
let enviar=document.getElementById("botonEnviar")
miFormulario.addEventListener("submit", validacion);

function validacion(evento) {
evento.preventDefault();
console.log(evento);
console.log("El formulario ha sido enviado");
}

//inicio elementos
function enviarFormulario(){
    let nombre=document.getElementById("capturaNombre").value;
    let email=document.getElementById("capturaEmail").value;
    let seleccion=document.getElementById("seleccionTema").value;
    let comentarios=document.getElementById("comentarios").value;
    //un ciclo para validar que los campos son llenados correctamente
    if(nombre==""){
        alert("El e-mail es un campo obligatorio.");
        document.getElementById("capturaNombre").focus();
    }else{
        if(email==""){
        alert("El e-mail es indispensable para comunicarnos con usted");
        document.getElementById("capturaEmail").focus();
    }else{
        console.log(nombre +""+ email+""+seleccion+""+comentarios)
        // document.getElementById("capturaNombre").value=""
        // document.getElementById("capturaEmail").value=""
        // document.getElementById("seleccionTema").value=""
        // document.getElementById("comentarios").value=""
        // document.getElementById("capturaNombre").focus();
    }
    }
}
//inicio evento
// function iniciarEvento() {


    // form.onsubmit = (event) => validarFormulario(event);
//   }
// function main(){
//     enviarFormulario();
//     // iniciarEvento();
// }
// main();
