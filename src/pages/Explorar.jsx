import { useState } from "react";
import { useSearchParams } from "react-router";
import Card from "../components/Card";
import contenidos from "../data/contenidos";

function Explorar() {
  const [busqueda, setBusqueda] = useState("");

  const [searchParams] = useSearchParams();
  const categoriaSeleccionada = searchParams.get("categoria");

  const contenidosFiltrados = contenidos.filter((contenido) => {
    const texto = `${contenido.titulo} ${contenido.categoria} ${contenido.descripcion} ${contenido.autor}`;

    const coincideBusqueda = texto
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      !categoriaSeleccionada ||
      contenido.categoria === categoriaSeleccionada;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-bold text-gray-900">
          Explorar cultura
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          Descubri diferentes manifestaciones culturales de la actualidad.
        </p>

        <div className="mt-8 w-50" >
          <input
            type="text"
            placeholder="Buscar contenidos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none focus:border-purple-500"
          />
        </div>

        {contenidosFiltrados.length === 0 ? (
          <div className="mt-10 rounded-2xl bg-white p-8 text-center shadow">
            <h2 className="text-2xl font-bold">
              No encontramos resultados
            </h2>

            <p className="mt-2 text-gray-600">
              Proba con otro termino de busqueda.
            </p>
          </div>
        ) : (
          <section className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {contenidosFiltrados.map((contenido) => (
              <Card
                key={contenido.id}
                contenido={contenido}
              />
            ))}
          </section>
        )}

      </div>
    </main>
  );
}

export default Explorar;