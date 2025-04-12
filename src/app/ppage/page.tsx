import { GodProductService } from "@/lib/Service/ProductService/GodProductService";
import ProductCard from "../components/ProductCard";
import { GodServiceProductService } from '@/lib/Service/ProductService/GodServiceProductService';
import Navbar from "../components/Navbar";


const GodProductServiceMethods = new GodProductService(); 
const GodServiceProductMethods = new GodServiceProductService()

export default async function ProductsPage() {
  const products = await GodProductServiceMethods.obtenerTodosLosProductos();
  const services = await GodServiceProductMethods.obtenerTodosLosProductos();

  return (
    <>
    <Navbar />
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Todos los productos y servicios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {services.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
    </>
  );
}
