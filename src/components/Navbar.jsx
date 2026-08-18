import { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-purple-400 font-bold"
        : "text-white hover:text-purple-400"
    }`;

  return (
    <nav className="bg-gray-950 px-6 py-4 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">
            Cultura Conectada 🌎
          </h1>

          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="text-2xl md:hidden"
          >
            ☰
          </button>

          <div className="hidden items-center gap-6 md:flex">
            <NavLink to="/" className={linkClass}>
              Inicio
            </NavLink>

            <NavLink to="/explorar" className={linkClass}>
              Explorar
            </NavLink>

            <NavLink to="/categorias" className={linkClass}>
              Categorías
            </NavLink>

            <NavLink to="/sobre" className={linkClass}>
              Sobre el proyecto
            </NavLink>
          </div>
        </div>

        {menuAbierto && (
          <div className="mt-4 flex flex-col gap-4 border-t border-gray-700 pt-4 md:hidden">
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setMenuAbierto(false)}
            >
              Inicio
            </NavLink>

            <NavLink
              to="/explorar"
              className={linkClass}
              onClick={() => setMenuAbierto(false)}
            >
              Explorar
            </NavLink>

            <NavLink
              to="/categorias"
              className={linkClass}
              onClick={() => setMenuAbierto(false)}
            >
              Categorías
            </NavLink>

            <NavLink
              to="/sobre"
              className={linkClass}
              onClick={() => setMenuAbierto(false)}
            >
              Sobre el proyecto
            </NavLink>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;