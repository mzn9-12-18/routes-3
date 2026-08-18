import { Link, useParams } from "react-router";
import contenidos from "../data/contenidos";

function Detalle() {
  const { id } = useParams();

  const contenido = contenidos.find(
    (item) => item.id === Number(id)
  );

  if (!contenido) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Contenido no encontrado
          </h1>

          <Link
            to="/explorar"
            className="mt-6 inline-block rounded-lg bg-purple-600 px-5 py-3 font-semibold text-white"
          >
            Volver a explorar
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <img
          src={contenido.imagen}
          alt={contenido.titulo}
          className="h-80 w-full object-cover"
        />

        <div className="p-8">
          <span className="font-semibold text-purple-600">
            {contenido.categoria}
          </span>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            {contenido.titulo}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {contenido.descripcion}
          </p>

          <div className="mt-6 space-y-2 text-gray-700">
            <p>
              <strong>Autor:</strong> {contenido.autor}
            </p>

            <p>
              <strong>Año:</strong> {contenido.anio}
            </p>
          </div>

          <Link
            to="/explorar"
            className="mt-8 inline-block rounded-lg bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            ← Volver a explorar
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Detalle;