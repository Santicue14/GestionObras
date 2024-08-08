import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
//ICONS
import { FaHouse, FaUser } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { FaCompass, FaGasPump, FaSignOutAlt } from "react-icons/fa";
import { MdArticle, MdContactSupport } from "react-icons/md";
//NAVBAR STYLES
import '../index.css'
import AuthContext from './providers/AuthProvider';
import ReclamosContext from './providers/ReclamosProvider';
import axios from 'axios';
// import './funcionesbarra.js' NOT USED (?)

export const NavBar = () => {
    const welcome = 'Obras y Servicios'
    const {getData} = useContext(ReclamosContext)
    const {auth, logout} = useContext(AuthContext)
    const [openedMapMenu, setMapMenu] = useState(false)
    const [openedReclaMenu, setReclaMenu] = useState(false)

    const [userData, setUserData] = useState({})


    useEffect(() => {
        axios.get('http://localhost:3000/api/usuarios/getinfo', {withCredentials: true})
          .then(response => {
            setUserData(response.data); // Asume que la respuesta contiene un array de tipos de reclamos
          })
          .catch(error => console.error(error));
      }, []);
    const handleMapMenu = () => {
        setMapMenu(!openedMapMenu)
    }
    const handleReclaMenu = () => {
        setReclaMenu(!openedReclaMenu)
    }
    // const handleConsuMenu = (e) => {
    //     setConsuMenu(!openedConsuMenu)
    // }

    return ( auth &&
        <div className="sidebar hidden shadow-2xl">
            <div className="active">
            </div>
            <div className="head">
                <div className="user-details">
                    <div className="image">
                        <p className="title">{welcome}</p>
                        <img src="src/assets/pos_icon.png" alt="Logo municipalidad jose c paz" width="60px" className='mx-auto saturate-0 top-0' />
                    </div>
                    <p className="name flex justify-between gap-1 items-center text-slate-500">
                        <FaUser className='top-0' />
                        {userData.nombre || ''}
                    </p>

                </div>
            </div>
            <div className="nav">
                <div className="menu">
                    <p className="title">Principal</p>
                    <ul>
                        <li className="">
                            <Link to="/">
                                <FaHouse />
                                <span className="text">Inicio</span>
                            </Link>
                        </li>
                        <li onClick={handleMapMenu} className={openedMapMenu ? 'active' : ''}>
                            <a href="#">
                                <FaCompass />
                                <span className="text">Mapas</span>
                                <i className="arrow ph-bold ph-caret-down"></i>
                            </a>
                            <ul className={`sub-menu ${openedMapMenu ? 'visible' : ''}`}>
                                <li>
                                    <Link to="zona">
                                        <span className="text">Zonas recolección</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="calles">
                                        <span className="text">Asfaltos por etapas</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li onClick={handleConsuMenu} className={openedConsuMenu ? 'active' : ''}>
                            <a href="#">
                                <FaGasPump />
                                <span className="text">Consumo</span>
                                <i className="arrow ph-bold ph-caret-down"></i>
                            </a>
                            <ul className={`sub-menu ${openedConsuMenu ? 'visible' : ''}`}>
                                <li>
                                    <Link to="consxdeleg">
                                        <span className="text">Consumo por delegación</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='cierreestimado'>
                                        <span className="text">Cierre estimado</span>
                                    </Link>
                                </li>
                            </ul>
                        </li> */}
                        <li onClick={handleReclaMenu} className={`cursor-pointer ${openedReclaMenu ? 'active' : ''}`}>
                            <a>
                                <MdArticle />
                                <span className="text">Reclamos</span>
                                <i className="arrow ph-bold ph-caret-down"></i>
                            </a>
                            <ul className={`sub-menu ${openedReclaMenu ? 'visible' : ''}`}>
                                <li>
                                    <Link to="cargareclamos">
                                        <span className="text">Cargar Reclamos</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="listareclamos">
                                        <span className="text">Listado de Reclamos</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu">
                <p className="title">Cuenta</p>
                <ul>
                    <li>
                        <a>
                            <MdContactSupport />
                            <span className="text">Soporte</span>
                        </a>
                    </li>
                    <li>
                        <button className='button-logout flex text-sm text-center p-2 gap-2 text-slate-500' onClick={logout}>
                            <FaSignOutAlt />
                            <span className="text">Cerrar sesión</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
