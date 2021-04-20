// 1. Básicos de los Modulos en ES6
// Y puedes exportar o importar todo, variables, funciones, classes 
// Para hacer referencia a la misma carpeta ./ donde estamos actualmente
// VS Code al importar por lo general lo coloca en el from 
import { Cliente } from './cliente.js';
// export default debe ir fuera de la llaves
import nuevaFuncion, {nombreCliente, ahorro, mostrarInformacion, tieneSaldo} from './cliente.js';
import { Empresa } from './empresa.js';

// console.log(clienteFueradeIIFE);
//console.log(clienteDentrodeIIFE);//clienteDentrodeIIFE is not defined

console.log(nombreCliente);
console.log(ahorro);

// 3  ) Exportar e importar funciones...

console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

// 4 Usando las Clases que están en cliente.js

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);

console.log(cliente.mostrarInformacionClase(nombreCliente, ahorro));

const empresa = new Empresa(nombreCliente, ahorro, 'Aprendizaje en línea');
console.log(empresa);
console.log(empresa.mostrarInformacionClase() );

nuevaFuncion();