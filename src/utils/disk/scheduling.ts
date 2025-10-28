import { Configuracion, Peticion, PeticionTerminada, ResultadoSimulacion } from "./definition";

export function crearResultadoInicial(peticiones: Peticion[], configuracion: Configuracion): ResultadoSimulacion {
    return {
        cadenaOriginal: peticiones,
        estrategiaUtilizada: configuracion.estrategia,
        detalleAtencion: [],
        dt: 0,
        rr: (peticiones.length * 60000) / ( 2 * configuracion.VR),
        tt1B: configuracion.TB * configuracion.TT1S,
        taT: 0,
        totalSTMSegunFormula: 0,
        totalRRSegunFormula: peticiones.length,
    };
}

export function FIFOScheduling(peticiones: Peticion[], configuracion: Configuracion): ResultadoSimulacion {
    const resultado = crearResultadoInicial(peticiones, configuracion);
    resultado.cadenaOriginal = peticiones;
    
    let ultLugarPista: number = configuracion.PC; 

    resultado.detalleAtencion = peticiones.map((peticion, indice) => {
        const distancia = Math.abs(ultLugarPista - peticion.numeroPista);
        const peticionTerminada: PeticionTerminada = {
            ordenAtencion: indice,
            nroPeticionOriginal: peticion.numeroPeticion,
            pistaRequerida: peticion.numeroPista,
            distanciaParcial: distancia,
        };

        resultado.totalSTMSegunFormula += 1;
        ultLugarPista = peticion.numeroPista;
        
        return peticionTerminada;
    });
    
    resultado.dt = resultado.detalleAtencion.reduce((acum, p) => acum + p.distanciaParcial, 0);
    const st = resultado.totalSTMSegunFormula * configuracion.STM
    const rr = resultado.rr;
    const tt = resultado.tt1B;
    resultado.taT = st + rr + tt; 

    return resultado;
}