// app/producto/[id]/pagar/page.tsx
import { GodProductService } from '@/lib/Service/ProductService/GodProductService';
import { GodServiceProductService } from '@/lib/Service/ProductService/GodServiceProductService';
import PagoPageClient from './PagoPageClient';
import Navbar from '../../components/Navbar';

const GodProductServiceMethods = new GodProductService();
const GodServiceProductMethods = new GodServiceProductService();

interface ProductoPageProps {
  params: { id: string };
}

export default async function PagoPageServer({ params }: ProductoPageProps) {
  const id = params.id;
  const product = await GodProductServiceMethods.obtenerProductoPorId(id);
  const service = await GodServiceProductMethods.obtenerProductoPorId(id);

  const selected = product || service;

  if (!selected) {
    return <div className="text-center mt-10 text-red-600">Producto o servicio no encontrado</div>;
  }

  return (<><Navbar /><PagoPageClient product={selected} id={id} /></>);
}
