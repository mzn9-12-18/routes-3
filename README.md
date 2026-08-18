# Cultura Conectada 🌎

## Descripción

Cultura Conectada es una Single Page Application (SPA) desarrollada con React y React Router.

La aplicación permite descubrir y explorar diferentes manifestaciones culturales actuales, como música, cine y series, arte digital, videojuegos, literatura y cultura local.

El proyecto utiliza datos estáticos almacenados en un array de objetos y no requiere una API externa.

## Temática

La temática elegida es la cultura digital y las expresiones culturales actuales.

El objetivo es ofrecer un espacio donde los usuarios puedan explorar diferentes contenidos culturales y acceder a información detallada sobre cada uno.

## Tecnologías utilizadas

- React
- Vite
- React Router
- Tailwind CSS
- JavaScript
- JSX

## Funcionalidades

- Navegación entre diferentes páginas sin recargar la aplicación.
- Exploración de contenidos culturales.
- Categorías culturales.
- Detalle individual de cada contenido.
- Rutas dinámicas utilizando `:id`.
- Buscador de contenidos.
- Filtrado por categoría.
- Página 404 para rutas inexistentes.
- Navbar responsive.
- Enlaces activos utilizando `NavLink`.
- Layout compartido utilizando `Outlet`.
- Footer presente en todas las páginas.

## Estructura del proyecto

```text
src/
├── components/
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   └── Navbar.jsx
│
├── data/
│   └── contenidos.js
│
├── pages/
│   ├── Home.jsx
│   ├── Explorar.jsx
│   ├── Categorias.jsx
│   ├── Detalle.jsx
│   ├── Sobre.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css


Principales Rutas 

Ruta              Descripción

/                 Página de inicio

/explorar         Explorador de contenidos

/categorias       Categorías culturales

/contenido/:id    Detalle de un contenido

/sobre            Información sobre el proyecto

*                 Página 404


 Instalación

Para instalar el proyecto, clonar el repositorio y ejecutar:
 npm install

 ---------

 Ejecución

Para iniciar el servidor de desarrollo:
npm run dev

Luego abrir en el navegador la dirección indicada por Vite, normalmente:
 http://localhost:5173


 React Router

El proyecto utiliza React Router para manejar la navegación entre las diferentes vistas.

Se utilizan:

* BrowserRouter
* Routes
* Route
* Link
* NavLink
* useParams
* useSearchParams
* Outlet

También se implementó una ruta dinámica:
 /contenido/:id
 que permite acceder al detalle de cada contenido.

Diseño responsive

La aplicación utiliza Tailwind CSS para crear una interfaz responsive y adaptable a diferentes tamaños de pantalla.

El Navbar cuenta con un menú responsive para dispositivos móviles.

Datos

Los contenidos culturales se encuentran almacenados en:
src/data/contenidos.js
Los datos están representados mediante un array de objetos.

Cada contenido contiene información como:

* ID
* Título
* Categoría
* Descripción
* Autor
* Imagen
* Año

Autor

Proyecto realizado por Monzon Brandon como práctica de React y React Router.