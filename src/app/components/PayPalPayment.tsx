import React from "react";

const PayPalPaymentForm = () => {
  return (
    <form className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Pago con PayPal</h2>

      <div>
        <label className="block text-sm text-gray-600">Correo electrónico de PayPal</label>
        <input type="email" className="w-full p-2 border rounded-md" placeholder="correo@ejemplo.com" />
      </div>

      <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition">
        Pagar con PayPal
      </button>
    </form>
  );
};

export default PayPalPaymentForm;
