import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    nombre: string;
    precio: number;
    imagen_url: string;
  };
}

function ProductPagar({ product }: ProductCardProps) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition p-4 text-black bg-white">
      <img
        src={product.imagen_url}
        alt={product.nombre}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{product.nombre}</h2>
      <h2 className="text-lg font-semibold mt-2"></h2>

      <p className="text-gray-600 mb-2">${product.precio}</p>
      <Link href={`/pasarelaPayU/${product.id}`}>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 m">
          Pagar a traves de PayU
        </button>
      </Link>
      <Link href={`/pasarelaPayPal/${product.id}`}>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-4">
          Pagar a traves de PayPal
        </button>
      </Link>
      <Link href={`/pasarelaTarjeta/${product.id}`}>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-4">
          Pagar a traves de Tarjeta de Credito
        </button>
      </Link>
    </div>
  );
}

export default ProductPagar;
