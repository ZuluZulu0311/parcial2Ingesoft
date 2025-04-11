import { Product } from '../interfaces/Product';
import Link from 'next/link';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <Link href={`/product/${product.id}`}>
        <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Ver detalles
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
