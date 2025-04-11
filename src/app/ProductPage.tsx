import { getProducts } from "@/lib/getProducts";
import ProductCard from "./components/ProductCard";

export default async function ProductsPage() {
  const { products } = await getProducts();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Todos los productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
