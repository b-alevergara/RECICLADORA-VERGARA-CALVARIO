//objeto de productos (pendiente agregarle imagen a cada producto)= <p class="card-img-top"> <b>${producto.img}</b></p>

const Productos = [
{
    numero: 1,
    nombre: "Caucho granulado", 
    precio: "450",
    unidadDeMedida: "Kilo",
    }, 
{
    numero: 2,
    nombre: "Caucho pulverizado",
    precio: "650",
    unidadDeMedida: "Kilo",
    },
{
    numero: 3,
    nombre: "Alambre de acero reciclado",
    precio: "300",
    unidadDeMedida: "Kilo",
    },
{
    numero: 4,
    nombre: "Caucho reciclado de 6 pulgadas",
    precio: "350",
    unidadDeMedida: "Kilo",
    }
]

const contenedorProductos = document.getElementById("contenedorProductos"); //el elemento esta en productos.html linea 52

for (const producto of Productos) {
    let column = document.createElement("div");
    column.className = "col-md-8 mt-4 "; 
    column.numero = `columna-${producto.numero}`;
    column.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                <p class="card-text">Precio: <b>${producto.precio}</b></p>
                <p class="card-text">Unidad de medida: <b>${producto.unidadDeMedida}</b></p>
            </div>
        </div>`;
contenedorProductos.append(column);}



//agregar mis operaciones del calculo total referente a la cantidad seleccionada (reduce)
//puedo incorporar el reduce solo para mi console.log
//poner un boton en cada producto para que el usuario vaya seleccionando el producto (y cantidad) que quiere
//boton +1- 
//y despues arrojarle el total de los articulos seleccionados
//(tiene que funcionar para sumar y restar, en caso de que se eliminen productos)
