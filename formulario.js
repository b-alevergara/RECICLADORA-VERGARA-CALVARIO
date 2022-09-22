//evento submit para mandar la info capturada del form
//e inicio elementos
function enviarFormulario(){
    const enviar=document.getElementById("botonEnviar")
    enviar.addEventListener("submit", (evento)=>{
        evento.preventDefault();
    
    let nombre=document.getElementById("capturaNombre").value;
    let email=document.getElementById("capturaEmail").value;
    let seleccion=document.getElementById("seleccionTema").value;
    let comentarios=document.getElementById("comentarios").value;
    //un ciclo para validar que los campos son llenados correctamente
    if(nombre==""){
        alert("El nombre es un campo obligatorio.");
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
        //para que vuelvan a iniciar el formulario
        document.getElementById("capturaNombre").focus();
    }}
    })}
function main(){enviarFormulario();}
main()
