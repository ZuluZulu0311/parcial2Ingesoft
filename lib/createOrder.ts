import { supabase } from "./supaClient";
import { Order } from "./types/Order"; 

export async function insertProduct(
  precio: number,
  email: string,
): Promise<Order | null> {

  const { data, error } = await supabase
    .from("ordenes")
    .insert([
      {
        precio: precio,
        email: email,
      },
    ])
    .select()
    .single(); 

  if (error) {
    console.error("Error creando la orden", error.message);
    return null;
  }

  console.log("Orden creada correctamente:", data);
  return data as Order;
}