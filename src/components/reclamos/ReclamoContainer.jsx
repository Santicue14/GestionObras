import { MdDelete, MdEdit } from "react-icons/md";
import reclamos from './reclamos.json'

export const ReclamoContainer = ({ reclamo, deleteReclamoById }) => {
    const { id, domicilio, email, entreCalles, fullName, observaciones, telefono, tipoRecla } = reclamo;
    return (
        <tr>
            <td className="border border-zinc-400 px-4 py-2">{fullName}</td>
            <td className="border border-zinc-400 px-4 py-2">{domicilio}</td>
            <td className="border border-zinc-400 px-4 py-2">{entreCalles}</td>
            <td className="border border-zinc-400 px-4 py-2">{telefono}</td>
            <td className="border border-zinc-400 px-4 py-2">{email}</td>
            <td className="border border-zinc-400 px-4 py-2">{tipoRecla}</td>
            <td className="border border-zinc-400 px-4 py-2">{observaciones}</td>
            <td className="border border-zinc-400 px-4 py-2">
                {
                    <p className="flex items-center justify-between text-3xl">
                        <MdEdit className="text-edit-500 cursor-pointer"/>
                        <MdDelete className="text-red-500 cursor-pointer" onClick={deleteReclamoById}/>
                    </p>
                }
            </td>
        </tr>
    );
};