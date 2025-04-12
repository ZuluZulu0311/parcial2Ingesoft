'use client';
import { useState } from 'react';
import { OrderService } from '@/lib/Service/OrderService/createOrder'; // ✅ Importa la clase
import { PayUPaymentStrategy } from '@/lib/PaymentStrategy/Strategies/PayUPaymentStrategy';
import ResumenCompra from '../../components/ResumenCompra';
import { Product } from "@/lib/Models/Products";

interface PagoPageClientProps {
  product: Product;
  id: string;
}

export default function PagoPageClient({ product, id }: PagoPageClientProps) {
  const [email, setEmail] = useState('');
  const orderService = new OrderService(); // ✅ Instancia del servicio

  const handlePagar = async () => {
    const precio = product.precio;
    const orden = await orderService.insertOrder(parseInt(id), precio, email); // ✅ Uso de método

    if (!orden) {
      alert('Error creando la orden');
      return;
    }

    const strategy = new PayUPaymentStrategy();
    await strategy.pay(orden, orden.precio);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4 text-black">
      <h1 className="text-xl font-bold">Pagar Producto</h1>
      <ResumenCompra product={product} />
      <input
        type="email"
        placeholder="Correo electrónico"
        className="w-full px-3 py-2 border border-gray-300 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button
        onClick={handlePagar}
        className="w-full bg-yellow-500 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-600"
      >
        Comprar con PayU
      </button>
    </div>
  );
}
