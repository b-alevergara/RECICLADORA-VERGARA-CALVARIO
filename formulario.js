//clase de productos

//funcion para capturar los datos obtenidos del form mediante clic al boton enviar
let enviar=document.getElementById("botonEnviar")

//evento submit
enviar.onclick = () => {
    alert("El formulario fue enviado")
}

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
        document.getElementById("capturaNombre").value=""
        document.getElementById("capturaEmail").value=""
        document.getElementById("seleccionTema").value=""
        document.getElementById("comentarios").value=""
        document.getElementById("capturaNombre").focus();
    }
    }
//agregar elementos al dom mediante la captura?
}


