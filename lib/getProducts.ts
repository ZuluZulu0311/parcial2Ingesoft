import { supabase } from './supaClient';

export async function getProducts() {
  let query = supabase
    .from('productos')
    .select('id, nombre, descripcion, imagen_url, precio, categoria')
  console.log("Si encontre registros")
  const { data, error } = await query;

  if (error) {
    console.error('Error al obtener productos:', error.message);
    return { products: [] };
  }

  return { products: data };
}