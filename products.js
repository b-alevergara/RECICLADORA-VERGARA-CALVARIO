async function LoadProducts() {
    const response = await fetch('../json/productos.json');
    const nombre = await response.json();
    console.log(nombre); 
    // logs [{ name: 'Joker'}, { name: 'Batman' }]
}
LoadProducts();

