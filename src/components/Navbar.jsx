import { Link } from 'react-router-dom';

function Navbar() {
  return (
   <nav className="bg-black text-white px-6 py-4 ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <h1 className="text-xl font-bold">
          Mi Tienda 🛍️
        </h1>

        <div className="flex gap-6">
          <Link
            to="/"
            className="hover:text-blue-400 transition"
          >
            Inicio
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-400 transition"
          >
            Acerca de
          </Link>

          <Link
            to="/products"
            className="hover:text-blue-400 transition"
          >
            Productos
          </Link>
        </div>

      </div>
    </nav>
  );
}
export default Navbar;