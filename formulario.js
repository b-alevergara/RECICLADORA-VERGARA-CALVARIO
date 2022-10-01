let datos =[];

function enviarFormulario(){
    const enviar=document.getElementById("botonEnviar")
    enviar.addEventListener("click", (evento)=>{
        evento.preventDefault(); 
    enviar.onclick= mostrarAlert

    function mostrarAlert(){ //revisar que funcione
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
    // let comentarios=document.getElementById("comentarios").value;

    const comentarios=document.getElementById("comentarios")
    comentarios.onclick= comentario
//sustituir la textarea en html por un boton de comentarios
//funcion del boton para abrir el alert con textarea y boton ok para confirmar
    const { value: comentario } = await Swal.fire({
        input: 'text-area',
        inputLabel: 'Mensaje',
        inputPlaceholder: 'Escribe tus comentarios, preguntas y/o solicitudes aqui'
    })
    if (comentario) {
        Swal.fire(`Texto ingresado: ${comentario}`)
    }

    //un ciclo para validar que todos los campos escenciales estan completos
    if(nombre==='' || email==='' || seleccion==='' ){  
        alert("Asegurese que todos los campos han sido llenados correctamente.");//este alert podria llevar sweetalert
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
    
}
}

function main(){enviarFormulario();}
main()

//almacenar en local storage los datos del array datos
localStorage.setItem('contactoCliente', JSON.stringify(datos))
let contactarCliente = JSON.parse(localStorage.getItem('contactarCliente'))
console.log(contactarCliente)
