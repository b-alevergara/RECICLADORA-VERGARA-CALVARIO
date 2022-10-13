function prods(){
    const contenedorProductos = document.getElementById("contenedorProductos");
    contenedorProductos.innerHTML = "";
    //este "productos" era mi array que cambie por el archivo json, no se como sustituir para que tome los productos del json
    productos.forEach((producto) => {
        let column = document.createElement("div");
        column.className = "col-md-8 mt-4 ";
        column.id = `columna-${producto.id}`;
        column.innerHTML = `
                <div class="card">
                <div class="card-body">
                    <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                    <p class="card-text">Precio: <b>${producto.precio}</b></p>
                    <p class="card-text">Unidad de medida: <b>${producto.unidadDeMedida}</b></p>
                </div>
                </div>`;
});
        contenedorProductos.append(column);
}

    async function llamarProductos(){
        const response = await fetch("./json/productos.json");
        const nombre = await response.json();
        console.log(nombre);
        prods()
    }
    //aqui no estoy segura si es obligatorio usar el catch(Error)


    prods()
    llamarProductos()
