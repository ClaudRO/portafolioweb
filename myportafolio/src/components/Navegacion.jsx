// Importa React y el componente Link de react-scroll
import React from 'react';
import { Link } from 'react-scroll';

// Define el componente Navbar
function Navbar() {
  return (
    <nav>
      <ul>
        {/* Enlace a la sección de Inicio */}
        <li>
          <Link
            activeClass="active"  // Clase que se aplicará al enlace cuando la sección esté activa
            to="inicio"            // ID de la sección destino
            spy={true}             // Actualiza la clase activa basada en el desplazamiento
            smooth={true}          // Activa el desplazamiento suave
            offset={-70}           // Ajusta la posición de desplazamiento (útil para barras de navegación fijas)
            duration={500}         // Duración del desplazamiento en milisegundos
          >
            Inicio
          </Link>
        </li>
        {/* Puedes agregar más enlaces según necesites */}
        <li>
          <Link
            activeClass="active"
            to="experiencia"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experiencia
          </Link>
        </li>
        {/* Enlace a la sección de Proyectos */}
        <li>
          <Link
            activeClass="active"
            to="proyectos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Proyectos
          </Link>
        </li>
        {/* Enlace a la sección de Educacion */}
        <li>
          <Link
            activeClass="active"
            to="educacion"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Educacion
          </Link>
        </li>
        {/* Enlace a la sección de Sobre mi */}
        <li>
          <Link
            activeClass="active"
            to="Sobre-mi"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Sobre mi
          </Link>
        </li>

        
      </ul>
    </nav>
  );
}

// Exporta el componente para usarlo en otros lugares
export default Navbar;
