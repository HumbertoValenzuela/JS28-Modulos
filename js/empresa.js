// Heredar una clase, que estamos exportando desde cliente heredarla en este archivo(empresa.js y apps.js)

// Recordar importar sin dependencias sin webPack sin ningún bundeler se requiere la extension (.js)
import { Cliente } from './cliente.js';

export class Empresa extends Cliente {
    constructor (nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacionClase(nombre, ahorro){
        return `Class Método Empresa: ${this.nombre} . Ahorro ${this.ahorro} y categoria ${this.categoria}`;
    }

}