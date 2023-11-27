import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MoreVert from '@mui/icons-material/MoreVert';

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 justify-between py-5 px-10 mx-0 mt-3 shadow-2xl backdrop-blur-2xl backdrop-saturate-200 rounded-lg lg:flex-nowrap lg:justify-start">
      <div className="container flex flex-wrap items-center justify-between px-0 overflow-hidden lg:flex-nowrap">
        {isAuthenticated ? (
          <>
            <Link to="/calendar" className="py-1 text-sm mr-2 ml-2 whitespace-nowrap font-bold text-white-700 lg:ml-0">
              Clinical Management - Bienvenido <u>{user.username}</u>
            </Link>
            {/* Sección 1 - Menú */}
            <div className="items-center w-full pt-4 pb-2 transition-all ease-in-out duration-350 lg-max:max-h-0 lg-max:overflow-hidden lg-max:hidden lg-max:bg-transparent lg-max:shadow-none md-max:relative grow basis-full rounded-2xl lg:flex lg:basis-auto lg:py-0">
              <ul className="flex flex-col pl-0 mx-auto mb-0 list-none md-max:w-full lg:flex-row">
                {/* Opción 1 - Notas */}
                <NavbarItem to="/tasks">Notas</NavbarItem>
                {/* Opción 2 - Pacientes */}
                <NavbarItem to="/patients">Pacientes</NavbarItem>
                {/* Opción 3 - Citas */}
                <NavbarItem to="/dateing">Citas</NavbarItem>
                {/* Opción 4 - Doctores */}
                {/* <NavbarItem to="/doctors">Doctores</NavbarItem> */}
                {/* Opción 5 - Logistica */}
                <NavbarDropdownItem title="Logistica">
                  <NavbarDropdownLink to="/tasks">Almacen</NavbarDropdownLink>
                  <NavbarDropdownLink to="/typeservies">Tipos Servicios</NavbarDropdownLink>
                  <NavbarDropdownLink to="/add-task">Facturacion</NavbarDropdownLink>
                </NavbarDropdownItem>
              </ul>
              {/* Sección 2 - Botón de opciones */}
              <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                <NavbarDropdownItem title="...">
                  <NavbarDropdownLink to="/profile">Perfil</NavbarDropdownLink>
                  <NavbarItem onClick={logout} to="/" className="text-red-700">
                    Salir
                  </NavbarItem>
                </NavbarDropdownItem>

              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/tasks" className="py-1 text-sm mr-2 ml-2 whitespace-nowrap font-bold text-white-700 lg:ml-0">
              Clinical Management
            </Link>
            {/* Sección 1 - Menú */}
            <div className="items-center w-full pt-4 pb-2 transition-all ease-in-out duration-350 lg-max:max-h-0 lg-max:overflow-hidden lg-max:hidden lg-max:bg-transparent lg-max:shadow-none md-max:relative grow basis-full rounded-2xl lg:flex lg:basis-auto lg:py-0">
              <ul className="flex flex-col pl-0 mx-auto mb-0 list-none md-max:w-full lg:flex-row">
                {/* <li>
                    <Link to='/register' className="inline-block px-8 py-2 mb-0 mr-1 text-xs font-bold text-center text-white align-middle transition-all ease-in-out bg-indigo-500 border-0 rounded-lg shadow-md cursor-pointer leading-pro tracking-tight-rem bg-150 bg-x-25 hover:-translate-y-px active:opacity-85">Register</Link>
                </li> */}
              </ul>
              {/* Sección 2 - Botón */}
              <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                <NavbarItem to="/login" className="bg-blue-500">Login</NavbarItem>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

// Componente funcional para representar un elemento del menú de la barra de navegación
function NavbarItem({ to, children, ...props }) {
  return (
    <div className="inline-block group">
      <span className="hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs font-bold transition-all duration-200 ease-in-out text-white">
        <Link to={to} {...props}>{children}</Link>
      </span>
      {/* Agregar menú desplegable si es necesario */}
    </div>
  );
}

// Componente funcional para representar un elemento de menú desplegable
function NavbarDropdownItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="inline-block group" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <span className="hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs font-bold transition-all duration-200 ease-in-out text-white cursor-pointer">
        {title}
      </span>
      {isOpen && (
        <div className="block absolute origin-top-left bg-zinc-700 text-base float-left p-2 pt-2 list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-200 ease-in-out transform scale-100 opacity-100 border">
          {children}
        </div>
      )}
    </div>
  );
}

// Componente funcional para representar un enlace dentro de un menú desplegable
function NavbarDropdownLink({ to, children }) {
  return (
    <Link to={to} className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-zinc-400 rounded transition-all duration-100">
      {children}
    </Link>
  );
}

export default Navbar;
