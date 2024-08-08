import { useNavigate } from "react-router-dom"
import AuthContext from "./providers/AuthProvider"
import { useContext, useState } from "react"
import imageLogo from '../assets/pos_icon.png'
export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')
  const { login } = useContext(AuthContext)
  const handleLogin = async (e) => {
    e.preventDefault()
    const data = { email, contrasena }
    try {
      await login(data)
    } catch (error) {
      console.error(error)
    }
    navigate('/')
  }
  return (
    <div className="mx-auto mt-12 items-center max-w-96 text-center flex flex-col bg-white p-4 rounded-xl gap-2 shadow-lg">
      <h1 className="text-3xl font-bold">Secretaria de Obras y Servicios de José C. Paz</h1>
      <img src={imageLogo} alt="" />
      <form onSubmit={handleLogin} className="grid grid-flow-row gap-4 w-full">
        <label htmlFor="email" className="">
          <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email" id="email" placeholder="Ingrese su email..." className="w-full rounded-md p-2" />
        </label>
        <label htmlFor="password" className="w-full">
          <input type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            name="password" id="password" placeholder="Ingrese su contraseña..." className="w-full rounded-md p-2" />
        </label>
      </form>
      <button onClick={handleLogin} className="bg-blue-500 w-24 h-11 text-white font-bold border border-blue-500 rounded-full hover:bg-slate-500 transition-all">Login</button>
    </div>
  )
}
