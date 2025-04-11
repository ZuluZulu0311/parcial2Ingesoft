import React from "react";

const PSEPaymentForm = () => {
  return (
    <form className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Pago con PSE</h2>

      <div>
        <label className="block text-sm text-gray-600">Banco</label>
        <select className="w-full p-2 border rounded-md">
          <option>Bancolombia</option>
          <option>Davivienda</option>
          <option>Banco de Bogotá</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-600">Número de documento</label>
        <input type="text" className="w-full p-2 border rounded-md" placeholder="1234567890" />
      </div>

      <div>
        <label className="block text-sm text-gray-600">Nombre completo</label>
        <input type="text" className="w-full p-2 border rounded-md" placeholder="Juan Pérez" />
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Pagar con PSE
      </button>
    </form>
  );
};

export default PSEPaymentForm;
