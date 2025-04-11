import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { Product } from '../interfaces/Product';

const dummyProducts: Product[] = [
  { id: 1, name: "Camiseta", price: 25.00, image: "/shirt.jpg" },
  { id: 2, name: "Pantalón", price: 40.00, image: "/pants.jpg" },
  { id: 3, name: "Zapatos", price: 60.00, image: "/shoes.jpg" }
];

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Productos destacados</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
