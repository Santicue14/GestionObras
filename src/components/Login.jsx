import { Navigate, redirect, useNavigate } from "react-router-dom"
import imageLogo from '../assets/pos_icon.png'

export const Login = ({setIsLogged}) => {
    const navigate = useNavigate()
    const handleLogin = (e) =>{
        console.log('Hola');
        e.preventDefault()
        setIsLogged(true)
        navigate('/')
    }
  return (
    <div className="mx-auto mt-12 items-center flex flex-col bg-white p-4 rounded-xl gap-2 shadow-lg">
        <article className="text-3xl font-bold underline">Pagina de pruebas</article>
        <img src={imageLogo} alt="" />
        <h1 className="font-bold">Secretaria de Obras y Servicios de José C. Paz</h1>
        <button onClick={handleLogin} className="bg-blue-500 w-24 h-11 text-white font-bold border border-blue-500 rounded-full hover:bg-slate-500 transition-all">Login</button>
    </div>
  )
}
