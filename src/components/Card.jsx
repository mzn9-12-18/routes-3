import { Link } from "react-router";

function Card({ contenido }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <img
        src={contenido.imagen}
        alt={contenido.titulo}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <span className="text-sm font-semibold text-purple-600">
          {contenido.categoria}
        </span>

        <h2 className="mt-2 text-xl font-bold text-gray-900">
          {contenido.titulo}
        </h2>

        <p className="mt-2 text-gray-600">
          {contenido.descripcion}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {contenido.anio}
          </span>

          <Link
            to={`/contenido/${contenido.id}`}
            className="rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white transition hover:bg-purple-700"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Card;