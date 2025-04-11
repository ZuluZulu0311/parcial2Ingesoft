// components/payments/CreditCardForm.tsx

import React from "react";

interface Props {
  onSubmit: (data: { cardNumber: string }) => void;
}

export default function CreditCardForm({ onSubmit }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const cardNumber = (e.currentTarget.elements.namedItem("cardNumber") as HTMLInputElement).value;
        onSubmit({ cardNumber });
      }}
      className="space-y-4 bg-white shadow p-4 rounded-md text-black"
    >
      <h2 className="text-lg font-semibold">Pago con Tarjeta</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Número de tarjeta</label>
        <input
          type="text"
          name="cardNumber"
          className="border border-gray-300 px-3 py-2 rounded w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Pagar con Tarjeta
      </button>
    </form>
  );
}
