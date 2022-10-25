async function LoadProducts() {
    const response = await fetch('../json/productos.json');
    const nombre = await response.json();
    console.log(nombre); 
}
LoadProducts();

//aqui utilizar fetch para llamar al archivo json


