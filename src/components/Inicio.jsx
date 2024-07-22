import React from 'react';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className="mx-auto mt-12 p-6 max-w-4xl  text-white rounded-lg">
      <header className="text-center mb-12">
        <h1 className="font-bold underline text-3xl drop-shadow-xl mb-4">Secretaría de Obras y Servicios de José C. Paz</h1>
        <p className="text-lg">Gestión eficiente de reclamos y servicios públicos en José C. Paz.</p>
      </header>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6 underline">Características Principales</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-60 p-4 m-2 bg-gray-700 justify-around transition-all hover:scale-105 rounded shadow-md ">
            <h3 className="text-xl font-semibold mb-2">Recolección de Datos</h3>
            <p className="text-gray-300">Recoge y gestiona reclamos de manera eficiente.</p>
          </div>
          <div className="w-60 p-4 m-2 bg-gray-700 rounded shadow-md justify-around transition-all hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Visualización de Mapas</h3>
            <p className="text-gray-300">Visualiza zonas y rutas en un mapa interactivo.</p>
          </div>
          <div className="w-60 p-4 m-2 bg-gray-700 rounded shadow-md justify-around transition-all hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Reportes Detallados</h3>
            <p className="text-gray-300">Genera reportes detallados y análisis.</p>
          </div>
        </div>
      </section>


      <footer className="absolute text-center bottom-4 flex items-center">
        <p className="text-gray-400">&copy; 2024 Secretaría de Obras y Servicios de José C. Paz. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};
