// 1. Básicos de los Modulos en ES6
// 1) El Problema

// 1) Esto nos puede llevar a variables que se mezclen con otras en especial si el código es mantenido por múltiples personas o también si decidimos implementar librerías...

// La solución es agrupar cada archivo en lo que se conoce como un IIFE (irse al otro archivo...)
// IIFE una función que se ejecuta inmediatamente
// IIFE hace que todo lo que este dentro de la función IIFE solo este. No se mezclaran las variables con los otros archivos JS, como por ejemplo app.js y empresa.js
// EXPORT DEFAULT
// Cada archivo puede tener múltiples exports, pero solo un export default, este export default puede tener un nombre o no...
// Esta forma evitará que estas variables definidas en este archivo no se puedan mezclar con las de otros archivos... y su sintaxis es la siguiente...
(function() {
    const clienteDentrodeIIFE = 'Fuera del IIFE, nombre Humberto';
})();

// const clienteFueradeIIFE = 'Fuera del IIFE, nombre Humberto';

// Para ello son muy útiles los modulos y 2 palabras, export e import...
export const nombreCliente = 'Humberto. const nombreCliente desde el archivo cliente.js';// Esto nos va amarcar un error, nos dirá que los exports solo funcionan en modules...
// Hay que abrir el index.js y declararlo con type="module"// Hay que abrir el index.js y declararlo con type="module"

export const ahorro = 200;


//3  Importar y exportar multiples valores

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene SAldo');
    }
}

// 4)
// Exportar una clase
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacionClase(nombre, ahorro){
        return `Class Método Cliente: ${this.nombre} . Ahorro ${this.ahorro}`;
    }
}

// EXPORT DEFAULT

// Cada archivo puede tener múltiples exports, pero solo un export default, este export default puede tener un nombre o no...

// se puede dejar sin el nombre export default function() {
// Alias en import se puede llamar como quieras, y JS llamará al unico export default
export default function nuevaFuncion() {
    console.log('export default');
}