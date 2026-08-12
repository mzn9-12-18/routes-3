
 import { Link } from 'react-router-dom';

function Products() {

  const products = [

    { id: 1, name: "Notebook", price: 500 },

    { id: 2, name: "Celular", price: 300 },

    { id: 3, name: "Auriculares", price: 100 },

  ];

  return (

    <div className="min-h-screen bg-neutral-900 p-8">

      <h1 className="text-4xl font-bold text-center mb-8">

        Productos 🛍️

      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {products.map((product) => (

          <div

            key={product.id}

            className="bg-black from-slate-700 to-slate-500 text-gray-900 rounded-2xl shadow-xl p-6 hover:translate-y-2 transition duration-300"

          >

            <h2 className="text-2xl font-bold mb-2">

              {product.name}

            </h2>

            <p className="text-2x1 font-bold  text-gray-900 mb-4">

              ${product.price}

            </p>

            <Link

              to={`/products/${product.id}`}

              className="inline-block bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"

            >

              Ver producto

            </Link>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Products;
