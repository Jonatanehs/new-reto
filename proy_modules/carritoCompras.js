/*Se crea una constante fs que se solicita al modulo de nodejs file system que 
interectua con sistemas de archivo
*/
const fs = require('fs');

/* ze crea una clase que es un elemento fundamental en la programacion orientada 
a objetos donde para definirlas se usa la palabra reservada class y el uso del 
theUpperCamelCase*/
class Producto {

/*Se encapsula las propiedades de la clase Producto que permite dar una 
prodeccion de datos adicional como un tipo de caja negra en este caso codigoProducto
*/
    #codigoProducto;

// Encapsulamiento de la propiedad nombre producto
    #nombreProducto;

// Encapsulamiento de la propiedad inventario producto
    #inventarioProducto;

// Encapsulamiento de la propiedad precioProducto
    #precioProducto;

// El constructor se usa para inicializar las propiedades de las clases
    constructor(){

/* Las propiedades de la clase producto se utiliza para dar un valor que se
inicializa con valores vacios, en este caso codigoProducto se van a manejar en 
un string*/
        this.#codigoProducto = '';

//El valor de la propiedad nombreProducto que se maneja en string 
        this.#nombreProducto = '';

//El valor de la propiedad inventarioProducto que se maneja en number
        this.#inventarioProducto = 0;

//El valor de la propiedad precioProducto que se maneja en number
        this.#precioProducto = 0;
    }

// El metodo set se encarga de asignarle o modificar los valores de las propiedades  
    set setCodigoProducto(value){

//La propiedad que se le puede modificar el valor es codigoproducto
        this.#codigoProducto = value;  
    }

// El metodo getter se usa para obtener el valor de una propiedad
    get getCodigoProducto(){

// Se obtiene el valor de la propiedad codigoProducto
        return this.#codigoProducto;
    }
// Se hace un set de nombre setNombreProducto
    set setNombreProducto(value){

// La propiedad que se modifica o asigna el valor es nombre producto
        this.#nombreProducto = value;
    }

//El metodo get se nombra como getNombreProducto
    get getNombreProducto(){

//La propiedad que solicita el valor es nombreProducto
        return this.#nombreProducto;
    }

// Se crea un metodo set llamadoset InventarioProducto
    set setInventarioProducto(value){

// La propiedad a asignarle el valor es inventarioProducto
        this.#inventarioProducto = value;
    }

// Se crea un metodo get llamado getInventarioProducto
    get getInventarioProducto(){

// La propiedad que es solicitada es inventarioProducto
        return this.#inventarioProducto;
    }

// se crea un metodo set llamado setPrecioProducto
    set setPrecioProducto(value){

// La propiedad que se le asigna un valor es precioProducto
        this.#precioProducto = value;
    }

// Se crea un metodo get llamado getPrecioProducto
    get getPrecioProducto(){

// Se solicita la propiedad precioProducto
        return this.#precioProducto
    }
}

//Se crea una clase llamada ProductosTienda
class ProductosTienda{

// Se crea una propiedad llamada listaProductos que esta encapsulada
    #listaProductos;

//Se hace un nuevo constructor de la clase Productos tienda
    constructor(){

//La propiedad que se inicializa es listaProductos que se maneja como un array
        this.#listaProductos = [];
    }

//Se crea un metodo get llamado getListaProductos
    get getListaProductos(){

//Se requiere a la propiedad listaproductos
        return this.#listaProductos;
    }

/* Se crea un metodo cargarArchivoProductos que son funciones para manipular las
variables de las clases*/
    cargaArchivoProductos(){

//Se declara una variable llamada contador que permite llevar una cuenta
        let contador = 0;

/*Se crea una constante llamada datos archivos que va a obtener los objetos de 
clases que estan en los datos.json */
        const datosArchivo = require('../datos.json');

/*Se crea un if que es una estructura condicional que si se cumple la condicion
de si datosArchivos es mayor que 0 se ejecuta la sentencia*/
        if(datosArchivo.length > 0){

//El forEach itera con los elementos de datosArchivo uno por uno con una funcion flecha  
            datosArchivo.forEach(objeto =>{
    
//El contador se aumenta uno en uno
                contador++;

// Se crea una variable llamada producto que es una instancia de la clase Producto
                let producto = new Producto;

// Se le asigna un valor desde el archivo del producto con la propiedad 
// setCodigoProducto del objeto de la propiedad codigoProducto
                producto.setCodigoProducto = objeto.codigoProducto;

//Se le asigna un valor al archivo del producto de la propiedad setNombreProducto
                producto.setNombreProducto = objeto.nombreProducto;

//Se le asigna un valor al archivo del producto de la propiedad setInventarioProducto
                producto.setInventarioProducto = objeto.inventarioProducto;

//Se le asigna un valor al archivo del producto de la propiedad setprecioProducto 
                producto.setPrecioProducto = objeto.precioProducto;

// El metodo .push añade los elementos al arreglo de la listaProductos  
                this.#listaProductos.push(producto);
            });

// Se imprime en la consola un mensaje que nos muestra el total de los productos cargados
            console.log(`Total de productos cargados ==> `.bgBlue + 
            ` ${contador} `.bgRed);

//Si no se cumple la condicion se mandara en falso 
        }else{

// Si lo anterior se fue por falso se imprime un mensaje de error en la consola
            console.log(`Error, el archivo datos.json no contiene datos\n`.bgRed);
        }
        
    }

//Se crea un metodo grabaArchivoProductos de la clase
    grabaArchivoProductos(){

/*La constante llamada instanciaClaseAObjetos contiene la propiedad  
getListaProductos haciendole un mapeado que es convertir objetos de clase a 
objetos de JavaScript  y en su parametro creando una funcion flecha*/
        const instanciaClaseAObjetos = this.getListaProductos.map(producto =>{
            
// Se crea un return para que retorne las propiedades que se necesitan
            return {

//Se utiliza la propiedad codigoProducto que retorna los valores de la propiedad
                codigoProducto: producto.getCodigoProducto,

//Se retorna el valor de la propiedad getNombreProducto
                nombreProducto: producto.getNombreProducto,

//Se retorna el valor de la propiedad getInventarioProducto 
                inventarioProducto: producto.getInventarioProducto,

//Se retorna el valor de la propiedad getPrecioProducto    
                precioProducto: producto.getPrecioProducto
            };
        });

/*La constante cadenaJson convierte los objetos de JavaScript a una cadena Json
Se solicita a la variable instanciaClaseAObjetos, el uso del null no modifica 
ningun valor del objeto y el 2 es el espacio de la sangria*/
        const cadenaJson = JSON.stringify(instanciaClaseAObjetos,null,2);

//La constante nombreArchivo contiene el nombre del archivo json
        const nombreArchivo = 'datos.json';

/*EL modulo fs interactua con los archivos con una funcion sicronica como lo es 
writeFileSync que espera a escribir los datos del archivo para continuar con la
el codigo. dentro de este argumenta esta el nombre del archivo, la constante de 
la cadenaJson y el estandar de los caracteres especiales*/
        fs.writeFileSync(nombreArchivo, cadenaJson, 'UTF-8');

// Se imprime un mensaje en la consola que indica donde se guardaron los datos
        console.log(`DATOS GUARDADOS EN ${nombreArchivo}`.bgMagenta);
    }

// Se crea un metodo de la clase ProductosTienda
    mostrarProductos(){

// Se solicita a listaProductos donde el forEach itera sobre los archivos encontrados
        this.getListaProductos.forEach(producto => {

// Se imprime en consola el valor de las propiedades y se les da una interfaz 
            console.log(`|    `+ producto.getCodigoProducto + `      |` +
                        `|      `+ producto.getNombreProducto+ `       |`+
                        `|       `+producto.getInventarioProducto+`     |`+
                        `|       `+producto.getPrecioProducto+`    |`);
        })
    }
}

//Importa un modulo de node js que permite la interaccion del usuario con la consola
const readLine = require('readline').createInterface({
    input: process.stdin, //Establece una entrada a la interfaz
    output: process.stdout //Establece una salida de la interfaz
});

// Se crea una funcion flecha que como parametro tiene a productosTienda
const agregarProducto = async (productosTienda) => {

/*Se retorna una nueva promesa que se usa en funciones asincronas para esperar 
que la funcion se ejecute. el resolve retorna un objeto de la promesa con una 
funcion flecha*/
    return new Promise((resolve) => {

// Los readLine.question pregunta al usuario sobre el codigo del producto
        readLine.question(`Ingrese el código del producto: `, (codigoProducto) => {

// La funcion flecha continua preguntandole al usuario por el nombre del producto
            readLine.question(`Ingrese el nombre del producto: `, (nombreProducto) => {

// La funcion flecha pasa a preguntarle al usuario sobre el inventario
                readLine.question(`Ingrese el inventario del producto: `, (inventarioProducto) => {

// La funcion flecha sigue preguntandole al usuario sobre el precio del producto
                    readLine.question(`Ingrese el precio del producto: `, (precioProducto) => {

// se crea una constante que es una instancia de la clase Producto
                        const producto = new Producto();

// se utiliza esta funcion para asignar nuevos valores 
                        producto.setCodigoProducto = codigoProducto; 
                        producto.setNombreProducto = nombreProducto;
                        producto.setInventarioProducto = Number(inventarioProducto);
                        producto.setPrecioProducto = Number(precioProducto);

// Se agrega el producto al arreglo getListaProductos
                        productosTienda.getListaProductos.push(producto);
                    
// Se le pregunta al usuario si desea agregar otro producto y se le asigna un parametro
                        readLine.question(`¿Desea agregar otro producto? (si/no): `, (respuesta) => {

/* La condicion que se debe cumplir es que si la respuesta es estrictamente si 
se ejecute lo que contiene la condicion */
                            if (respuesta.toLowerCase() === 'si') {

/* Llama de nuevo a la funcion para agregar otro producto y el .then(resolve) 
que maneja el resultado de la promesa si esta se resuelve correctamente*/ 
                                agregarProducto(productosTienda).then(resolve);
                             
// Si llega a ser falso se cierra la interfaz 
                            } else {
                                readLine.close();
                                resolve();
                            }
                        });
                    });
                });
            });
        });
    });
} 

// este modulo exporta las clases y las funciones 
module.exports = {
    Producto,
    ProductosTienda,
    agregarProducto
}
