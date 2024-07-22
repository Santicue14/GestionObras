import TipoReclamos from './tipos_reclamos.json';
import { useState } from 'react';
import listaReclamos from './reclamos.json'
export const CreateReclamos = () => {
    const tipos = TipoReclamos;
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [domicilio, setDomicilio] = useState("")
    const [entreCalles, setEntreCalles] = useState("")
    const [observaciones, setObservaciones] = useState("")
    const [tipoRecla, setTipoRecla] = useState("")
    const messageWell = 'Reclamo cargado con exito'
    let id = listaReclamos.length ? Math.max(...listaReclamos.map((rec) => rec.id)) : 1
    const recla = {
        id,
        fullName,
        email,
        telefono,
        domicilio,
        entreCalles,
        observaciones,
        tipoRecla
    }
    const handleSubmit = () => {
        if (recla.tipoRecla != "") {
            event.preventDefault()
            listaReclamos.push(recla)
            console.log(listaReclamos);
            alert(messageWell)
            setFullName("")
            setDomicilio("")
            setEmail("")
            setTelefono("")
            setEntreCalles("")
            setObservaciones("")

        } else {
            event.preventDefault()
            alert('Seleccione el tipo de reclamo')
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "nombre":
                setFullName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "tel":
                setTelefono(value);
                break;
            case "domicilio":
                setDomicilio(value);
                break;
            case "entre-calles":
                setEntreCalles(value);
                break;
            case "tipo_reclamo":
                setTipoRecla(value);
                break;
            case "mensaje":
                setObservaciones(value);
                break;
            default:
                break;
        }
    }
    return (
        <div className='absolute mx-[15%] gap-4 items-center  mt-20 flex text-white font-bold'>
            <form action="" method="post" className='formRecla flex flex-wrap' onSubmit={handleSubmit}>
                <div className='w-full md:w-1/2 flex flex-col'>
                    <label htmlFor="nombre">Nombre completo:</label>
                    <input
                        value={fullName}
                        type="text"
                        id="nombre"
                        name="nombre"
                        className='border rounded-md p-1'
                        onChange={handleChange}
                        required />
                </div>
                <div className='w-full md:w-1/3 flex flex-col'>
                    <label htmlFor="email">Email:</label>
                    <input
                        value={email}
                        type="email"
                        id="email"
                        name="email"
                        className='border rounded-md p-1'
                        onChange={handleChange}
                        required />
                </div>
                <div className='w-full md:w-1/3 flex flex-col'>
                    <label htmlFor="tel">Telefono:</label>
                    <input
                        value={telefono}
                        type="number"
                        id="tel"
                        name="tel"
                        className='border rounded-md p-1'
                        minLength="8"
                        maxLength="10"
                        onChange={handleChange}
                        required />
                </div>
                <div className='w-full md:w-1/4 flex flex-col'>
                    <label htmlFor="domicilio">Domicilio:</label>
                    <input
                        value={domicilio}
                        type="domicilio"
                        id="domicilio"
                        name="domicilio"
                        className='border rounded-md p-1'
                        onChange={handleChange}
                        required />
                </div>
                <div className='w-full md:w-1/4 flex flex-col'>
                    <label htmlFor="entre-calles">Entre calles:</label>
                    <input
                        value={entreCalles}
                        type="entre-calles"
                        id="entre-calles"
                        name="entre-calles"
                        className='border rounded-md p-1'
                        onChange={handleChange}
                        required />
                </div>
                <div className='w-full md:w-1/4 flex flex-col relative'>
                    <label htmlFor="tipo_reclamo">Tipo de Reclamo:</label>
                    <select
                        id="tipo_reclamo"
                        name="tipo_reclamo"
                        className='border absolute top-10 left-2 text-black rounded-md p-1 h-fit'
                        onChange={handleChange}
                    >
                        <option value="">Seleccione una opción...</option>
                        {tipos.map(tipo => (
                            <option
                                key={tipo.id}
                                value={tipo.tipo_reclamo}
                            >
                                {tipo.tipo_reclamo}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='w-full md:w-2/3 flex flex-col h-40'>
                    <label htmlFor="mensaje">Observaciones:</label>
                    <textarea
                        value={observaciones}
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        className='border rounded-md p-1'
                        onChange={handleChange}></textarea>
                </div>
                <div className='w-full flex justify-center mt-2'>
                    <button
                        type="submit"
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};