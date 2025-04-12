'use client';
import { useState } from 'react';
import { insertOrder } from '@/lib/Service/OrderService/createOrder';
import { CreditCardPaymentStrategy } from '@/lib/PaymentStrategy/Strategies/CreditCardPaymentStrategy';
import ResumenCompra from '../../components/ResumenCompra';
import { Product } from "@/lib/Models/Products";

interface PagoPageClientProps {
  product: Product;
  id: string;
}

export default function PagoPageClient({ product, id }: PagoPageClientProps) {
  const [email, setEmail] = useState('');

  const handlePagar = async () => {
    if (!email) {
      alert('Por favor ingresa tu correo');
      return;
    }

    const precio = product.precio;
    const orden = await insertOrder(parseInt(id), precio, email);

    if (!orden) {
      alert('Error creando la orden');
      return;
    }

    const strategy = new CreditCardPaymentStrategy();
    await strategy.pay(orden, orden.precio);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4 text-black">
      <h1 className="text-xl font-bold">Pagar con Tarjeta de Crédito</h1>

      <ResumenCompra product={product} />

      {/* Campos falsos solo para estética */}
      <input
        type="text"
        placeholder="Nombre en la tarjeta"
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />

      <input
        type="text"
        placeholder="Número de tarjeta"
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />

      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="MM/AA"
          className="w-1/2 px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="CVV"
          className="w-1/2 px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      {/* Único campo funcional */}
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
        className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700"
      >
        Comprar con Tarjeta de Crédito
      </button>
    </div>
  );
}
