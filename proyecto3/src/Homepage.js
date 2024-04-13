import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white"></section>

      <header className="mx-auto max-w-screen-xl0 px-9 py-2 sm:px-9 sm:py-12 lg:px-8 bg-blue-950">
  <div className="sm:flex sm:items-center sm:justify-between">
    <div className="text-center sm:text-left">
      <h1 className="text-2xl font-bold text-gray-100 sm:text-3xl">Bienvenidos!!</h1>
      <p className="mt-1.5 text-sm text-gray-100">Farmacias Tumbadas. </p>
    </div>

    <div className="flex gap-4"> {/* Utiliza flexbox para alinear horizontalmente los botones */}
      <Link to="/Registro">
        <button className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring" type="button">
          <span className="text-sm font-medium">Registrarse</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </Link>

      <Link to="/IniciarSesion">
        <button className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring" type="button">
          <span className="text-sm font-medium">Iniciar Sesión</span>
        </button>
      </Link>
    </div>
  </div>
</header>

      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              <span className="sm:block"> Farmacias Tumbadas. </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Conoce nuestros Productos y nuestras mejores ofertas!!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
        {/* Botón para redirigir a Registro.js */}
        <Link to="/registro">
          <button className="block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
            Ingresar
          </button>
        </Link>

        {/* Botón para redirigir a Sobrenosotros.js */}
        <Link to="/sobrenosotros">
          <button className="block rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
            Acerca de Nosotros
          </button>
        </Link>
      </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;
