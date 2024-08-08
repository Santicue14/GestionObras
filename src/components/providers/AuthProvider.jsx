import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie'

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const API_HOST = import.meta.env.VITE_API_HOST;
    const API_PORT = import.meta.env.VITE_API_PORT;
    const API_URL = `${API_HOST}:${API_PORT}/api/auth`;
    const [auth, setAuth] = useState(Cookies.get('token') || false)

    useEffect(() => {
        if (auth) {
            Cookies.set('token', auth, { expires: 1, secure: true })
        } else {
            Cookies.remove('token')
        }
    }, [auth])
    const login = async (data) => {
        const { email, contrasena } = data
        setAuth('true')
        Cookies.set('token', 'true', { expires: 1, secure: true })
    }
        //     return axios.post(`http://${API_URL}/login`, {
        //         email, contrasena
        //     }).then(response => {
        //         setAuth(response.data.token)
        //         Cookies.set('token', auth, { expires: 1, secure: true })
        //     })
        //         .catch(error => {
        //             console.error(error)
        //             throw error.response.data
        //         })
        // }

        const logout = () => {
            return axios.post(`http://${API_URL}/logout`)
                .then(response => {
                    Cookies.remove('token')
                    setAuth(null)
                    console.log(response.data.message);
                })
        }

        return (
            <AuthContext.Provider value={{ auth, login, logout }}>
                {children}
            </AuthContext.Provider>
        )
    }

    export default AuthContext