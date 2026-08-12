import { useParams } from 'react-router-dom';


function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-900 p-8">
      <div className="max-w-2xl mx-auto bg-black rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4">
          Detalle del producto 🛍️
        </h1>

        <p className="text-xl text-gray-600">
          ID del producto: {id}
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;