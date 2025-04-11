'use client';

import { useState } from 'react';
import { insertProduct } from '../../../lib/createProduct'; 
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

const CATEGORIAS = ['Ropa', 'Tecnología', 'Hogar', 'Juguetes'];

const NuevoProducto = () => {
  const router = useRouter();

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState<File | null>(null);

  const resetForm = () => {
    setNombre('');
    setPrecio(0);
    setDescripcion('');
    setCategoria('');
    setImagen(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!imagen) {
        alert('Por favor, selecciona una imagen para el nuevo producto.');
        return;
      }

      const newProduct = await insertProduct(imagen, nombre, descripcion, precio, categoria);

      if (newProduct) {
        alert('Producto añadido correctamente');
        router.push('/');
      }

      resetForm();
    } catch (error) {
      console.error('Error al procesar el producto:', error);
      alert(
        'Hubo un error al procesar el producto. Detalles: ' +
          (error instanceof Error ? error.message : 'Error desconocido')
      );
    }
  };

  return (
    <>
    <Navbar />
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-black">
      <h1 className="text-2xl font-bold mb-6 text-center">Añadir nuevo producto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Precio</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none h-20"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Categoría</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Selecciona una categoría</option>
            {CATEGORIAS.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Imagen</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImagen(e.target.files?.[0] || null)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Añadir Producto
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default NuevoProducto;
