//evento submit para mandar la info capturada del form e inicio de variables
function enviarFormulario(){
    const enviar=document.getElementById("botonEnviar")
    enviar.addEventListener("submit", (evento)=>{
        evento.preventDefault(); 
        console.log('Enviado')
        class Persona {
            constructor(nombre, email, tema, comentarios) {
                this.nombre = nombre;
                this.email = email;
                this.tema = tema;
                this.comentarios = comentarios;
            }
        }            
    
    nombre=document.getElementById("capturaNombre").value;
    email=document.getElementById("capturaEmail").value;
    seleccion=document.getElementById("seleccionTema").value;
    comentarios=document.getElementById("comentarios").value;
    //un ciclo para validar que los campos son llenados correctamente
        //revisar que se ejecuten correctamente
        //CORREGIR

    if(nombre==='' || email===''){  //revisar que estos criterios funcionen
        alert("Asegurese que todos los campos han sido llenados correctamente.");
        document.getElementById("capturaNombre").focus();
    }else{
    //imprimo en consola los campos que el usuario llena y despues los dejo en blanco para volver a iniciar el formulario
        nuevaPersona= new Persona(capturaNombre,capturaEmail,capturaTema,capturaComentarios); //sin let deberia funcionar esta variable afuera de la funcion
        console.log(nuevaPersona);
        pushDatos()
    
            document.getElementById("capturaNombre").value=""
            document.getElementById("capturaEmail").value=""
            document.getElementById("seleccionTema").value=""
            document.getElementById("comentarios").value=""
        //probar si funciona el console log y si cambia los campos a blancos
            document.getElementById("capturaNombre").focus();
    }
    //guardar los datos obtenidos en un array
    let datos =[];
    function pushDatos(){
        datos.push(nuevaPersona);
        console.log(datos);
        }
    
//los datos me gustaria enviarlos a mi correo electronico para contactar al cliente(creo que necesito backend para esto)
}
}

function main(){enviarFormulario();}
main()

//puedo a;adir una tabla con los datos ingresados al html con inner html 
//function tabla(){
    // nombre.innerHTML=`<h3>Datos ingresados</h3>
    // <p><strong> Nombre: </strong> ${nombre}</p>`  y asi de cada elemento min 15.32
// }