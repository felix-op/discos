export type Peticion = {
    numeroPeticion: number,
    numeroPista: number,
    // Opcionalmente: bloquesRequeridos: number,
};

export type TipoEstrategia = 
    | 'FIFO' 
    | 'SSTF' 
    | 'SCAN' 
    | 'C-SCAN' 
    | 'LOOK' 
    | 'C-LOOK' 
    | 'F-SCAN' 
    | 'N-STEP-SCAN';

export type Configuracion = {
    /* Parámetros Físicos del Disco */

    // Seek Time Medio (ms)
    STM: number,
    // Velocidad de Rotación (rpm)
    VR: number,
    // Tiempo de Transferencia de 1 Sector (ms)
    TT1S: number,
    // Tamaño de Bloque (unidades de sector)
    TB: number,
    // Total de Pistas del disco
    PT: number,

    /* Parámetros de la Simulación */

    // Posición Inicial de las Cabezas (nro. de pista, de 0 a PT)
    PC: number,
    // Sentido Inicial (C = Creciente, D = Decreciente). Solo aplica si la estrategia lo requiere.
    SC: 'C' | 'D',
    // Estrategia a utilizar
    estrategia: TipoEstrategia,

    /* Parámetros Específicos de Estrategias Compuestas */

    divisionFSCAN?: 'primer-mitad' | 'segunda-mitad' | string, // Cómo se divide la lista para F-SCAN
    // Parámetro N para N-STEP-SCAN
    longitudN?: number,
};

export type PeticionTerminada = {
    ordenAtencion: number,
    nroPeticionOriginal: number,
    pistaRequerida: number,
    distanciaParcial: number,
};

export type ResultadoSimulacion = {
    /* Parámetros de la simulación */
    cadenaOriginal: Peticion[],
    estrategiaUtilizada: TipoEstrategia,

    // Detalle de la ejecución
    detalleAtencion: PeticionTerminada[],

    /* Indicadores de Salida (Cálculos) */
    // Distancia total recorrida (pistas)
    dt: number,
    // Retardo rotacional total (ms)
    rr: number,
    // Tiempo de transferencia de 1 bloque (ms), calculado de TT1S y TB
    tt1B: number,
    // Tiempo de acceso total (ms) = st + rr + tt
    taT: number,

    /* Detalle para taT */
    // Cantidad de STM (Seek Time Medio)
    totalSTMSegunFormula: number,
    // Cantidad de rr (retardo rotacional)
    totalRRSegunFormula: number,
};