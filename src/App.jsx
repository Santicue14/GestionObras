import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { MapReco } from './components/recoleccion/MapReco';
import { Asfaltos } from './components/asfaltos/Asfaltos';
import { CreateReclamos } from './components/reclamos/CreateReclamos';
import { ListadoReclamos } from './components/reclamos/ListadoReclamos';
import {PrivateRoute} from './components/PrivateRoute';
import {Login} from './components/Login';

import './index.css';
import 'leaflet/dist/leaflet.css';
import { Inicio } from './components/Inicio';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className='flex'>
      <BrowserRouter>
        {isLogged && <NavBar className="relative" setIsLogged={setIsLogged}/>}
        <Routes>
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
          <Route path="/" element={<PrivateRoute isLogged={isLogged}><Inicio /></PrivateRoute>} />
          <Route path="/zona" element={<PrivateRoute isLogged={isLogged}><MapReco /></PrivateRoute>} />
          <Route path="/calles" element={<PrivateRoute isLogged={isLogged}><Asfaltos /></PrivateRoute>} />
          <Route path="/cargareclamos" element={<PrivateRoute isLogged={isLogged}><CreateReclamos /></PrivateRoute>} />
          <Route path="/listareclamos" element={<PrivateRoute isLogged={isLogged}><ListadoReclamos /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
