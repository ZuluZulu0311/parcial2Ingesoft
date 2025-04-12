import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen_url: string;
  };
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition p-4 text-black bg-white">
      <img
        src={product.imagen_url}
        alt={product.nombre}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{product.nombre}</h2>
      <p className="text-gray-600 mb-2">{product.descripcion}</p>
      <p className="text-gray-600 mb-2">${product.precio}</p>
      <Link href={`/compra/${product.id}`}>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Comprar
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;
