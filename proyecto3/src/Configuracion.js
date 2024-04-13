import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Configuracion = () => {
  // Estados para almacenar la información del usuario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [cambiosGuardados, setCambiosGuardados] = useState(false); // Estado para controlar si se guardaron los cambios

  // Función para manejar la actualización de la información del usuario
  const actualizarInformacion = (event) => {
    event.preventDefault();
    // en un futuro enviar la información actualizada del usuario al servidor.
    // solo actualizaremos el estado local y se mostrara el mensaje de confirmación
    console.log('Información actualizada:');
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Fecha de Nacimiento:', fechaNacimiento);
    console.log('Ciudad:', ciudad);
    console.log('Código Postal:', codigoPostal);
    // Mostrar mensaje de confirmación y mantener los cambios fijos
    setCambiosGuardados(true);
  };

  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />
      <style>
        {`
          * {
            font-family: 'Source Sans Pro';
          }
        `}
      </style>

      <div className="mx-4 min-h-screen max-w-screen-x2 sm:mx-8 xl:mx-auto">
        <h1 className="border-b py-6 text-5xl font-semibold">Settings</h1>
        <form onSubmit={actualizarInformacion} className="py-6">
          <div className="grid grid-cols-2 gap-x-4">
            <div className="mb-4">
              <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
              <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-gray-900">Apellido</label>
              <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="fechaNacimiento" className="block mb-2 text-sm font-medium text-gray-900">Fecha de Nacimiento</label>
              <input type="date" id="fechaNacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="ciudad" className="block mb-2 text-sm font-medium text-gray-900">Ciudad</label>
              <input type="text" id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="codigoPostal" className="block mb-2 text-sm font-medium text-gray-900">Código Postal</label>
              <input type="text" id="codigoPostal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} className="border border-gray-300 rounded-lg p-2 w-full" />
            </div>
          </div>
          <button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">Actualizar Información</button>
        </form>

        {/* Mensaje de confirmación */}
        {cambiosGuardados && (
          <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert">
            <div className="flex items-center gap-4">
              <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>

              <p className="font-medium sm:text-lg">¡Cambios guardados!</p>
            </div>

            <p className="mt-4 text-gray-500">
              Los cambios se han guardado correctamente.
            </p>
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Equipo de Desarrollo</h2>
          <p className="text-gray-600">
            Somos un equipo dedicado a mejorar constantemente nuestra aplicación para brindarte la mejor experiencia posible. Si tienes alguna sugerencia o comentario, no dudes en contactarnos.
          </p>

          <Link to="/Home" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
              Volver
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;
