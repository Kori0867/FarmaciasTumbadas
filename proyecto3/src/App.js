import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter, Route y Routes
import HomePage from './Homepage'; // Importa el componente HomePage
import Registro from './Registro'; // Importa el componente Registro
import 'tailwindcss/tailwind.css'; // Importa los estilos de Tailwind CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import IniciarSesion from './Iniciarsesion';
import Sobrenosotros from './Sobrenosotros'; 
import Inventario from './Inventario';
import Contacto from './Contacto';
import Configuracion from './Configuracion';
import Home from './Home';
import Ubicacion from './Ubicacion';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Utiliza Routes en lugar de Switch */}
          <Route exact path="/" element={<HomePage />} /> {/* Define la ruta para HomePage */}
          <Route path="/registro" element={<Registro />} /> {/* Define la ruta para Registro */}
          <Route path="/iniciarsesion" element={<IniciarSesion />} /> {/* Define la ruta para IniciarSesion */}
          <Route path="/Home" element={<Home />} /> {/* Define la ruta para MenuPrincipal */}
          <Route path="/Sobrenosotros" element={<Sobrenosotros />} /> {/* Define la ruta para Sobrenosotros */}
          <Route path="/Contacto" element={<Contacto />} /> {/* Define la ruta para Contacto */}
          <Route path="/Inventario" element={<Inventario />} /> {/* Define la ruta para Inventariol */}
          <Route path="/Configuracion" element={<Configuracion />} /> {/* Define la ruta para Configuracion*/}
          <Route path="/Ubicacion" element={<Ubicacion />} /> {/* Define la ruta para Configuracion*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
