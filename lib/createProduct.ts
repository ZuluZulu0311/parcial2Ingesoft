import { supabase } from "./supaClient";
import { uploadImage } from "./uploadImagen";
import { Product } from "./types/Products";

export async function insertProduct(
  file: File,
  nombre: string,
  descripcion: string,
  precio: number,
  categoria: string
): Promise<Product | null> {
  const imagenUrl = await uploadImage(file);
  if (!imagenUrl) {
    console.error("Error: No se pudo obtener la URL de la imagen");
    return null;
  }

  const { data, error } = await supabase
    .from("productos")
    .insert([
      {
        nombre: nombre,
        descripcion: descripcion,
        imagen_url: imagenUrl,
        precio: precio,
        categoria: categoria,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error creando el producto", error.message);
    return null;
  }

  console.log("Producto creado correctamente:", data);
  return data as Product;
}
