import { Configuracion } from "./definition";

export function crearConfiguracionInicial(): Configuracion {
    return {
        STM: 0,
        VR: 1,
        TT1S: 1,
        TB: 1,
        PT: 10,
        PC: 0,
        SC: 'C',
        estrategia: 'FIFO',
        divisionFSCAN: 'primer-mitad',
        longitudN: 5,
    };
}