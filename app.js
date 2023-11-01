// se solicita al modulo de colores de node js
require('colors');

// Se crea una constante que importa la clase y la funcion del archivo de javaScript
const { ProductosTienda, agregarProducto} = require('./proy_modules/carritoCompras')

// Se declara una constante llamada main que contiene una funcion flecha
const main = async () => {
    
// Limbia la consola 
    console.clear();

// Imprime una interfaz en la consola
    console.log(`**********************`);
    console.log(`*   Proyecto clases  *`);
    console.log('**********************');

// se declara una nueva variable llamada productosTienda que es una instancia de clase
    let productosTienda = new ProductosTienda;

// se llama al metodo en la variable productosTienda
    productosTienda.cargaArchivoProductos();

// se imprime un mensaje en la consola
    console.log(`DATOS APERTURA TIENDA`.bgBlue);

// Se llama al metodo mostrarProductos en la variable productosTienda
    productosTienda.mostrarProductos();

/*La variable productosTienda que llama a los valores de getListaProductos que 
itera sobre la lsita de productos */
    productosTienda.getListaProductos.forEach(producto => {

// El producto va cambiando de valor entre numeros aleatorios 
        producto.setInventarioProducto = Math.floor(Math.random() * (20 - 1) + 1);
    });

// se imprime un mensaje en la consola
    console.log(`DATOS CIERRE TIENDA`.bgGreen);

// en la variable productosTienda se llama al metodo mostrarProductos
    productosTienda.mostrarProductos();

/* el await de la funcion agregarProducto que hace una pausa y espera a que la funcion
se termine para seguir con el codigo */
    await agregarProducto(productosTienda);

// la variable productos tienda requiere el metodo grabarArchivoProductos 
    productosTienda.grabaArchivoProductos();

}

main();