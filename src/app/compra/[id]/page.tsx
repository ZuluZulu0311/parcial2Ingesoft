import { GodProductService } from '@/lib/Service/ProductService/GodProductService';
import ProductCard from '../../components/ProductCard';

const GodProductServiceMethods = new GodProductService(); 


interface ProductoPageProps {
  params: { id: string };
}

export default async function ProductoPage({ params }: ProductoPageProps) {
  const id = params.id;
  const product = await GodProductServiceMethods.obtenerProductoPorId(id);

  if (!product) {
    return <p className="text-center mt-10 text-red-600">Producto no encontrado</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Detalle del producto</h1>
      <div className="max-w-md mx-auto">
        <ProductCard key={product.id} product={product} />
      </div>
    </main>
  );
}
