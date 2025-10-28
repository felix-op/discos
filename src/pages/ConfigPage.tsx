//import { Title } from "@components/typography/Title";

//import { Configuracion } from "src/utils/disk/definition";
//import { crearConfiguracionInicial } from "src/utils/disk/disk";

export default function ConfigPage() {
    //const configuracion: Configuracion = crearConfiguracionInicial();

    return (
        <div className="flex flex-col gap-2 p-5">
            <div className="flex flex-col gap-2 items-start">
                <label htmlFor="">Seek Time Promedio:   </label>
                <input
                    id="STM"
                    name="STM"
                    type="text"
                    className="bg-[#eee] outline-none rounded-sm text-[black] py-2 px-4 w-100"
                    placeholder="Ejemplo: 10ms"
                />
            </div>

            <div className="flex flex-col gap-2 items-start">
                <label htmlFor="">Velocidad de Rotación:   </label>
                <input
                    id="STM"
                    name="STM"
                    type="text"
                    className="bg-[#eee] outline-none rounded-sm text-[black] py-2 px-4 w-100"
                    placeholder="Ejemplo: 1000rpm"
                />
            </div>
        </div>
    );
}