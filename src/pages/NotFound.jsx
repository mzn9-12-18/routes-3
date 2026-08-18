import { Link } from "react-router";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="text-center">
        <p className="text-7xl font-bold text-purple-600">404</p>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Página no encontrada
        </h1>

        <p className="mt-3 text-gray-600">
          La página que estás buscando no existe.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

export default NotFound;