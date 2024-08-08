import ReclamosContext from '../providers/ReclamosProvider';
import { ReclamoContainer } from './ReclamoContainer';
import { useContext, useEffect, useState } from 'react';

export const ListadoReclamos = () => {
    const [reclamos, setReclamos] = useState([]);
    const { listarReclamos } = useContext(ReclamosContext);

    useEffect(() => {
        const fetchReclamos = async () => {
            try {
                const data = await listarReclamos();
                setReclamos(data); // Actualiza el estado con los datos obtenidos
                console.log(reclamos);
            } catch (error) {
                console.error("Error al listar reclamos:", error);
            }
        };

        fetchReclamos();
    }, [listarReclamos]); // Ejecuta solo una vez cuando se monta el componente

return (
    <div className="flex min-h-screen w-full pl-[20%]">
        <div className="w-3/4 flex flex-col items-center">
            <input
                type="text"
                placeholder="Search..."
                className="w-full max-w-md px-4 py-2 mt-8 border border-zinc-400 bg-white"
            />
            <table className="mt-4 ml-4 border-collapse border border-zinc-400 bg-white rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th className="border border-zinc-400 px-4 py-2 max-w-400">Nombre Completo</th>
                        <th className="border border-zinc-400 px-4 py-2">Domicilio</th>
                        <th className="border border-zinc-400 px-4 py-2">Entre calles</th>
                        <th className="border border-zinc-400 px-4 py-2">Telefono</th>
                        <th className="border border-zinc-400 px-4 py-2 max-w-200">Email</th>
                        <th className="border border-zinc-400 px-4 py-2">Tipo reclamo</th>
                        <th className="border border-zinc-400 px-4 py-2 max-w-200">Observaciones</th>
                        <th className="border border-zinc-400 px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {reclamos.length > 20 && reclamos.map(reclam => (
                            <ReclamoContainer key={reclam.id} reclamo={reclam} />
                        ))} */}
                </tbody>
            </table>
        </div>
    </div>
);
};
