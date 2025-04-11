import { supabase } from './supaClient';

export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from('productos')
    .select('id, nombre, descripcion, imagen_url, precio, categoria')
    .eq('id', id) // No uses %...% aquí, es un número exacto
    .single();    // Te devuelve un solo objeto plano

  if (error) {
    console.error('Error al obtener el producto:', error.message);
    return null;
  }

  return data;
}
