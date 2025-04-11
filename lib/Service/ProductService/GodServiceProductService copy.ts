import { supabase } from '@/lib/supaClient';
import { ConcreteServiceProductBuilder } from '@/lib/ProductBuilder/ConcreteServiceProductBuilder';
import { ProductDirector } from '@/lib/ProductBuilder/ProductDirector';
import { Product } from '@/lib/Models/Products';

export class GodServiceProductService{
    async crearProductoConTodo(
        file: File,
        nombre: string,
        descripcion: string,
        precio: number,
        categoria: string
      ): Promise<Product | null> {

        // Sube la imagen
        const { data: imageData, error: uploadError } = await supabase.storage
          .from('images')
          .upload(`products/${file.name}`, file, {
            cacheControl: '3600',
            upsert: true
          });
    
        if (uploadError) {
          console.error('Error subiendo imagen:', uploadError.message);
          return null;
        }
    
        const { data: urlData } = supabase.storage
          .from('images')
          .getPublicUrl(`products/${file.name}`);
    
        const imagenUrl = urlData?.publicUrl;
        if (!imagenUrl) {
          console.error('No se pudo obtener URL pública');
          return null;
        }
    
        // Construye el producto haciendo uso del builder
        const builder = new ConcreteServiceProductBuilder();
        const director = new ProductDirector();
        director.setBuilder(builder);
        director.buildFullPhysicalProduct(nombre, descripcion, imagenUrl, precio, categoria);
        const producto = builder.getProduct();
    
        // Realiza insert en la base de datos
        const { data, error } = await supabase
          .from('productos')
          .insert([{
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            imagen_url: producto.imagen_url,
            precio: producto.precio,
            categoria: producto.categoria
          }])
          .select()
          .single();
    
        if (error) {
          console.error('Error insertando producto:', error.message);
          return null;
        }
    
        producto.id = data.id;
        console.log('Producto creado correctamente');
        return producto;
      }
    
      //Tiene métodos get
      async obtenerTodosLosProductos(): Promise<Product[]> {
        const { data, error } = await supabase
          .from('productos')
          .select('id, nombre, descripcion, imagen_url, precio, categoria');
    
        if (error) {
          console.error('Error al obtener productos:', error.message);
          return [];
        }
    
        console.log('Productos obtenidos con éxito');
        return data as Product[];
      }
    
      async obtenerProductoPorId(id: string): Promise<Product | null> {
        const { data, error } = await supabase
          .from('productos')
          .select('id, nombre, descripcion, imagen_url, precio, categoria')
          .eq('id', id)
          .single();

        
        //Se manejan errores
        if (error) {
          console.error(`Error al obtener producto con ID ${id}:`, error.message);
          return null;
        }
    
        return data as Product;
      }
}
