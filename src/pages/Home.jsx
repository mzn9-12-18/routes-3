import { Link } from "react-router";

function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="bg-gray-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold text-purple-400">
            CULTURA DIGITAL
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            Cultura Conectada 🌎
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Un espacio para descubrir, explorar y conocer diferentes
            manifestaciones culturales de la actualidad.
          </p>

          <Link
            to="/explorar"
            className="mt-8 inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            Comenzar a explorar
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900">
          Explora nuestras categorías
        </h2>

        <p className="mt-3 text-gray-600">
          Descubrí diferentes formas de expresión cultural.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/categorias"
            className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-4xl">🎵</span>
            <h3 className="mt-4 text-xl font-bold">Musica</h3>
            <p className="mt-2 text-gray-600">
              Nuevos sonidos y expresiones musicales.
            </p>
          </Link>

          <Link
            to="/categorias"
            className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-4xl">🎬</span>
            <h3 className="mt-4 text-xl font-bold">Cine y series</h3>
            <p className="mt-2 text-gray-600">
              Historias y producciones audiovisuales actuales.
            </p>
          </Link>

          <Link
            to="/categorias"
            className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-4xl">🎨</span>
            <h3 className="mt-4 text-xl font-bold">Arte digital</h3>
            <p className="mt-2 text-gray-600">
              Nuevas formas de crear y experimentar el arte.
            </p>
          </Link>

          <Link
            to="/categorias"
            className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-4xl">🎮</span>
            <h3 className="mt-4 text-xl font-bold">Videojuegos</h3>
            <p className="mt-2 text-gray-600">
              Tecnología, historias y entretenimiento interactivo.
            </p>
          </Link>

          <Link
            to="/categorias"
            className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-4xl">📚</span>
            <h3 className="mt-4 text-xl font-bold">Literatura</h3>
            <p className="mt-2 text-gray-600">
              Historias, autores y nuevas formas de leer.
            </p>
          </Link>

          <Link
            to="/categorias"
            className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-4xl">🇦🇷</span>
            <h3 className="mt-4 text-xl font-bold">Cultura local</h3>
            <p className="mt-2 text-gray-600">
              Expresiones culturales de nuestra región.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;