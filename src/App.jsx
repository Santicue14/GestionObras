import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { MapReco } from './components/recoleccion/MapReco';
import { Asfaltos } from './components/asfaltos/Asfaltos';
import { CreateReclamos } from './components/reclamos/CreateReclamos';
import { ListadoReclamos } from './components/reclamos/ListadoReclamos';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';
import { AuthProvider } from './components/providers/AuthProvider';
import { ReclamosProvider } from './components/providers/ReclamosProvider';
import './index.css';
import 'leaflet/dist/leaflet.css';
import { Inicio } from './components/Inicio';

function App() {

  return (
    <AuthProvider>
      <ReclamosProvider>
        <div className='flex'>
          <BrowserRouter>
            <NavBar className="relative" />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<PrivateRoute ><Inicio /></PrivateRoute>} />
              <Route path="/zona" element={<PrivateRoute ><MapReco /></PrivateRoute>} />
              <Route path="/calles" element={<PrivateRoute ><Asfaltos /></PrivateRoute>} />
              <Route path="/cargareclamos" element={<PrivateRoute ><CreateReclamos /></PrivateRoute>} />
              <Route path="/listareclamos" element={<PrivateRoute ><ListadoReclamos /></PrivateRoute>} />
            </Routes>
          </BrowserRouter>
        </div>
      </ReclamosProvider>
    </AuthProvider>
  );
}

export default App;
