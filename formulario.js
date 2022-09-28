//evento submit para mandar la info capturada del form e inicio de variables
let datos =[];

function enviarFormulario(){
    const enviar=document.getElementById("botonEnviar")
    enviar.addEventListener("click", (evento)=>{
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
    
    let nombre=document.getElementById("capturaNombre").value;
    let email=document.getElementById("capturaEmail").value;
    let seleccion=document.getElementById("seleccionTema").value;
    let comentarios=document.getElementById("comentarios").value;
    //un ciclo para validar que los campos son llenados correctamente

        //revisar que se ejecuten correctamente
    if(nombre==='' || email==='' || seleccion===''|| comentarios==='' ){  //revisar que estos criterios funcionen
        alert("Asegurese que todos los campos han sido llenados correctamente.");
        document.getElementById("capturaNombre").focus();
    }else{
    //imprimo en consola los campos que el usuario llena y despues los dejo en blanco para volver a iniciar el formulario
        nuevaPersona= new Persona(capturaNombre,capturaEmail,capturaTema,capturaComentarios); 
        console.log(nuevaPersona);
        pushDatos()
    
            document.getElementById("capturaNombre").value=""
            document.getElementById("capturaEmail").value=""
            document.getElementById("seleccionTema").value=""
            document.getElementById("comentarios").value=""
            document.getElementById("capturaNombre").focus();
    }
    //guardar los datos obtenidos en el array datos
    function pushDatos(nuevaPersona){
        datos.push(nuevaPersona);
        console.log(datos);
        }
    
//los datos me gustaria enviarlos a mi correo electronico para contactar al cliente(creo que necesito backend para esto)
}
}

function main(){enviarFormulario();}
main()

//almacenar en local storage los datos del array datos
localStorage.setItem('contactoCliente', JSON.stringify(datos))
let contactarCliente = JSON.parse(localStorage.getItem('contactarCliente'))


//puedo a;adir una tabla con los datos ingresados al html con inner html 
//function tabla(){
    // nombre.innerHTML=`<h3>Datos ingresados</h3>
    // <p><strong> Nombre: </strong> ${nombre}</p>`  y asi de cada elemento
// }
