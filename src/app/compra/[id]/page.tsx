import { GodProductService } from "@/lib/Service/ProductService/GodProductService";
import ProductPagar from "../../components/ProductPagar";
import Navbar from "../../components/Navbar";
import { GodServiceProductService } from "@/lib/Service/ProductService/GodServiceProductService";

const GodProductServiceMethods = new GodProductService();
const GodServiceProductMethods = new GodServiceProductService();

interface ProductoPageProps {
  params: { id: string };
}

export default async function ProductoPage({ params }: ProductoPageProps) {
  const id = params.id;
  const product = await GodProductServiceMethods.obtenerProductoPorId(id);
  const service = await GodServiceProductMethods.obtenerProductoPorId(id);

  // Si no existe ninguno, muestra mensaje de error
  if (!product && !service) {
    return (
      <p className="text-center mt-10 text-red-600">Producto o servicio no encontrado</p>
    );
  }

  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">Detalle del producto o servicio</h1>
        <div className="max-w-md mx-auto space-y-6">
          {product && <ProductPagar key={`product-${product.id}`} product={product} />}
          {service && <ProductPagar key={`service-${service.id}`} product={service} />}
        </div>
      </main>
    </>
  );
}
