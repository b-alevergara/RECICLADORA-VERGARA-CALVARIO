let datos =[];

function enviarFormulario(){
    const enviar=document.getElementById("botonEnviar")
    enviar.addEventListener("click", (evento)=>{
        evento.preventDefault(); 
    enviar.onclick= mostrarAlert

    function mostrarAlert(){ //el swal con await debe estar dentro de una función async
        swal.fire({
            icon:"success",
            title: "Formulario enviado"
        })
    }
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

    function comments(comentario){//se supone que debia meter mi swal en una funcion porque necesita await
        Swal.fire({
            input: 'text-area',
            inputLabel: 'Mensaje',
            inputPlaceholder: 'Escribe tus comentarios, preguntas y/o solicitudes aqui'
        })
        if (comentario) {
            Swal.fire(`Texto ingresado: ${comentario}`)
        }
        }//revisar que esto funcione o modificar la funcion del swal

    //un ciclo para validar que todos los campos escenciales estan completos
    if(nombre==='' || email==='' || seleccion==='' ){  
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
            document.getElementById("comentarios").value=""  //que pasaria con este? poque ya lo cambie por un boton, lo ingresado en el alert a donde va?
            document.getElementById("capturaNombre").focus();
    }
    //guardar los datos obtenidos en el array datos
    function pushDatos(nuevaPersona){
        datos.push(nuevaPersona);
        console.log(datos);
        }
    
}
}

function main(){enviarFormulario();}
main()

//almacenar en local storage los datos del array datos
localStorage.setItem('contactoCliente', JSON.stringify(datos))
let contactarCliente = JSON.parse(localStorage.getItem('contactarCliente'))
console.log(contactarCliente)

//aqui voy a crear una tabla a partir de los datos obtenidos
//con los valores nombre, email
