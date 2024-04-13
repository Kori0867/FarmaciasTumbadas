import React from 'react';
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Link } from 'react-router-dom'; // Importa Link desde React Router

function Ubicacion() {
    // Coordenadas de ejemplo (puedes cambiarlas por las que desees)
    const ubicacion = { lat: 28.6427945, lng: -106.1474151 }; // Buenos Aires, Argentina

    return (
        <div>
            <>
                <h2>Visita Nuestra Nueva Sucursal </h2>
            </>
            <GoogleMap
                zoom={15} // Nivel de zoom
                center={ubicacion} // Centrar el mapa en la ubicación especificada
                mapContainerStyle={{ height: "650px", width: "100%" }} // Estilo del contenedor del mapa
            >
                {/* Marcador en la ubicación especificada */}
                <Marker position={ubicacion} title="Mi Ubicación" />
            </GoogleMap>

            {/* Botón Volver */}
            <Link to="/home">
                <button>Volver</button>
            </Link>
        </div>
    );
}

export default Ubicacion;
