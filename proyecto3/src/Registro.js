import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const Registro = () => {
  return (
    <div class="mx-auto max-w-screen-x1 px-1 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Empiece Hoy</h1>
        <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
          Entra en confianza de estar con nosotros.
        </p>
        <form action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p class="text-center text-lg font-medium">Registrarse </p>
          <div>
            <label for="nombre" class="sr-only">Nombre</label>
            <input
              type="text"
              id="nombre"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Nombre"
            />
          </div>
          <div>
            <label for="apellido" class="sr-only">Apellido</label>
            <input
              type="text"
              id="apellido"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Apellido"
            />
          </div>
          <div>
            <label for="email" class="sr-only">Correo</label>
            <input
              type="email"
              id="email"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Contraseña</label>
            <input
              type="password"
              id="password"
              class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
          </div>
          <Link to="/Iniciarsesion">
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Registrarse 
            </button>
          </Link>
          <p class="text-center text-sm text-gray-500">
            ¿Ya tienes cuenta?{' '}
          
            <Link to="/IniciarSesion" className="underline">IniciarSesion</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registro;
