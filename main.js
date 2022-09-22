//objeto de productos
const Productos = [
{
    numero: 1,
    nombre: "Caucho granulado", 
    precio: "450",
    unidadDeMedida: "Kilo",
    img: './PROYECTO RECICLADORA - VERGARA CALVARIO/imagenes/CAUCHO GRANULADO.jpg'
    }, //no me esta tomando la ruta de las imagenes, corregirlo
{
    numero: 2,
    nombre: "Caucho pulverizado",
    precio: "650",
    unidadDeMedida: "Kilo",
    img: "./PROYECTO RECICLADORA - VERGARA CALVARIO/imagenes/CAUCHO PULVERIZADO.jpg"
    },
{
    numero: 3,
    nombre: "Alambre de acero reciclado",
    precio: "300",
    unidadDeMedida: "Kilo",
    img: "./PROYECTO RECICLADORA - VERGARA CALVARIO/imagenes/ACERO LIMPIO.png"
    },
{
    numero: 4,
    nombre: "Caucho reciclado de 6 pulgadas",
    precio: "350",
    unidadDeMedida: "Kilo",
    img: "./PROYECTO RECICLADORA - VERGARA CALVARIO/imagenes/CAUCHO TRITURADO 6 PULGADAS.jpg"
    }
]

const contenedorProductos = document.getElementById("contenedorProductos");

for (const producto of Productos) {
    let column = document.createElement("div");
    column.className = "col-md-8 mt-4 "; //quiero centrar estos elementos en la pagina
    column.numero = `columna-${producto.numero}`;
    column.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                <p class="card-text">Precio: <b>${producto.precio}</b></p>
                <p class="card-text">Unidad de medida: <b>${producto.unidadDeMedida}</b></p>
                <p class="card-img-top"> <b>${producto.img}</b></p>
            </div>
        </div>`;
contenedorProductos.append(column);}

//es necesario incorporarle un carrito de compras?

//agregar mis operaciones del calculo total referente a la cantidad seleccionada
