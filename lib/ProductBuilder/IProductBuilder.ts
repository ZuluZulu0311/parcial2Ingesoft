export interface IProductBuilder {
  reset(): void;
  setNombre(nombre: string): void;
  setDescripcion(descripcion: string): void;
  setImagenUrl(imagen_url: string): void;
  setPrecio(precio: number): void;
  setCategoria(categoria: string): void;
}