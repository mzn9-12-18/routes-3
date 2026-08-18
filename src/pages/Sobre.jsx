function Sobre() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900">
          Sobre Cultura Conectada
        </h1>

        <section className="mt-8 space-y-6 text-gray-600">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Objetivo de la aplicación
            </h2>

            <p className="mt-2">
              Cultura Conectada es una plataforma creada para descubrir y
              explorar diferentes manifestaciones culturales actuales,
              utilizando la tecnología como medio para acercar contenidos a
              los usuarios.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              ¿Qué significa cultura digital?
            </h2>

            <p className="mt-2">
              La cultura digital comprende las formas en que las tecnologías
              digitales transforman nuestra manera de comunicarnos, crear,
              consumir contenidos y relacionarnos con diferentes expresiones
              culturales.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              ¿Quién desarrolló el proyecto?
            </h2>

            <p className="mt-2">
              Este proyecto fue desarrollado por Monzon Brandon como parte de una actividad
              práctica de React y React Router.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Sobre;