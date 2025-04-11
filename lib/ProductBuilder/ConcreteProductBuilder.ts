import { IProductBuilder } from "./IProductBuilder";
import { Product } from "../Models/Products";

export class ConcreteProductBuilder implements IProductBuilder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.product = new Product(0, "", "", "", 0, "");
  }

  setNombre(nombre: string): void {
    this.product.nombre = nombre;
  }

  setDescripcion(descripcion: string): void {
    this.product.descripcion = descripcion;
  }

  setImagenUrl(imagen_url: string): void {
    this.product.imagen_url = imagen_url;
  }

  setPrecio(precio: number): void {
    this.product.precio = precio;
  }

  setCategoria(categoria: string): void {
    this.product.categoria = categoria;
  }


  getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}
