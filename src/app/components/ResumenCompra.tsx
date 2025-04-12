import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    nombre: string;
    precio: number;
    imagen_url: string;
  };
}

function ResumenCompra({ product }: ProductCardProps) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition p-4 text-black bg-white">
      <img
        src={product.imagen_url}
        alt={product.nombre}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{product.nombre}</h2>
      <p className="text-gray-600 mb-2">${product.precio}</p>
    </div>
  );
}

export default ResumenCompra;
