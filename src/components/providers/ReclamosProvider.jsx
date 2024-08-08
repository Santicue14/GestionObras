import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const ReclamosContext = createContext();

// eslint-disable-next-line react/prop-types
export const ReclamosProvider = ({ children }) => {
    const API_HOST = import.meta.env.VITE_API_HOST;
    const API_PORT = import.meta.env.VITE_API_PORT;
    const API_URL_TIPOS = `http://${API_HOST}:${API_PORT}/api/tiporeclamos`;
    const API_URL_RECLAMOS = `http://${API_HOST}:${API_PORT}/api/reclamos`;

    const [token,setToken] = useState(Cookies.get('token') || null)
    useEffect(()=>{
        if(Cookies.get('token')){
            setToken(Cookies.get('token'))
        }
    },[token])
    const authorization = {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        withCredentials: true
    };    
    const listarTipoReclamos = async () => {
        try {
            const response = await axios.get(API_URL_TIPOS, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            });
            return response.data; // Retorna solo los datos
        } catch (error) {
            console.error(error);
            throw error.response ? error.response.data : new Error("Error desconocido al obtener tipos de reclamos");
        }
    };
    
    const listarReclamos = async () => {
        try {
            const response = await axios.get(API_URL_RECLAMOS, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            });
            console.log(response.data);
            return response.data; // Retorna solo los datos
        } catch (error) {
            console.error(error);
            throw error.response ? error.response.data : new Error("Error desconocido al obtener reclamos");
        }
    };
    const getData = async () => {
        try {
            const response = await axios.get(`http://${API_HOST}:${API_PORT}/api/usuarios/getinfo`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true
            });
            return response.data; // Retorna solo los datos
        } catch (error) {
            console.error(error);
            throw error.response ? error.response.data : new Error("Error desconocido al obtener tipos de reclamos");
        }
    };
    return (
        <ReclamosContext.Provider value={{ listarTipoReclamos, listarReclamos, getData }}>
            {children}
        </ReclamosContext.Provider>
    );
};

export default ReclamosContext;
