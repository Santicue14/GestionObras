import { ReclamoContainer } from './ReclamoContainer'
import { useState } from 'react';
import reclamos from './reclamos.json'
import { redirect } from 'react-router-dom';

export const ListadoReclamos = () => {
    const [reclamosState, setReclamosState] = useState(reclamos);

    const deleteReclamoById = (id) =>{
        const reclamoIdx = reclamosState.findIndex(reclamo => reclamo.id == id)
        console.log("Click");
        if(reclamoIdx != -1){
            const updatedReclamos = [...reclamosState];
            updatedReclamos.splice(reclamoIdx, 1);
            setReclamosState(updatedReclamos);
            console.log("Reclamo borrado");
        }else{
            console.log(id);
        }
    }
    return (
            <div className="flex min-h-screen w-full pl-[20%]">
                <div className="w-3/4 flex flex-col items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full max-w-md px-4 py-2 mt-8 border border-zinc-400 bg-white"
                    />
                    <table className="mt-4 ml-4 border-collapse border border-zinc-400 bg-white rounded-lg overflow-hidden ">
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
                            {reclamosState.map(reclam => (
                                <ReclamoContainer key={reclam.id} reclamo={reclam} deleteReclamoById={()=>deleteReclamoById(reclam.id)} /> 
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            )
}
