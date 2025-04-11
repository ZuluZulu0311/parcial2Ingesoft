'use client';

import { useState } from 'react';
import { insertOrder } from '@/lib/Service/OrderService/createOrder';
import { PayUPaymentStrategy } from '@/lib/PaymentStrategy/Strategies/PayUPaymentStrategy';

export default function PagoPageClient({ productId }: { productId: string }) {
  const [email, setEmail] = useState('');

  const handlePagar = async () => {
    const precio = 20000;
    const orden = await insertOrder(parseInt(productId), precio, email);

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
