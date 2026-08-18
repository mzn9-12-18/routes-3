import { Link } from "react-router";

const categorias = [
  {
    nombre: "Musica",
    emoji: "🎵",
    descripcion: "Nuevos sonidos y expresiones musicales.",
  },
  {
    nombre: "Cine y series",
    emoji: "🎬",
    descripcion: "Historias y producciones audiovisuales actuales.",
  },
  {
    nombre: "Arte digital",
    emoji: "🎨",
    descripcion: "Nuevas formas de crear y experimentar el arte.",
  },
  {
    nombre: "Videojuegos",
    emoji: "🎮",
    descripcion: "Tecnología, historias y entretenimiento interactivo.",
  },
  {
    nombre: "Literatura",
    emoji: "📚",
    descripcion: "Historias, autores y nuevas formas de leer.",
  },
  {
    nombre: "Cultura local",
    emoji: "🇦🇷",
    descripcion: "Expresiones culturales de nuestra región.",
  },
];

function Categorias() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Categorías
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          Explorá diferentes expresiones de la cultura actual.
        </p>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((categoria) => (
            <article
              key={categoria.nombre}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-5xl">
                {categoria.emoji}
              </span>

              <h2 className="mt-5 text-2xl font-bold text-gray-900">
                {categoria.nombre}
              </h2>

              <p className="mt-3 text-gray-600">
                {categoria.descripcion}
              </p>

              <Link
                to={`/explorar?categoria=${encodeURIComponent(
                  categoria.nombre
                )}`}
                className="mt-6 inline-block rounded-lg bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700"
              >
                Ver contenidos
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Categorias;