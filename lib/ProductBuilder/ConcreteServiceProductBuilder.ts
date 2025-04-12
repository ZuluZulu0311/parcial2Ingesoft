import { IProductBuilder } from "./IProductBuilder";
import { ServiceProduct } from "../Models/ServiceProduct";

export class ConcreteServiceProductBuilder implements IProductBuilder {
  private product!: ServiceProduct;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.product = new ServiceProduct(0, "", "", "", 0, "");
  }

  setNombre(nombre: string): void {
    this.product.nombre = `Servicio: ${nombre}`; 
  }

  setDescripcion(descripcion: string): void {
    const categoria = this.product.categoria.toLowerCase();
  
    if (!descripcion) {
      switch (categoria) {
        case "turismo":
          this.product.descripcion = "Servicio guiado para explorar destinos turísticos destacados.";
          break;
        case "salud":
          this.product.descripcion = "Atención personalizada por profesionales en salud.";
          break;
        case "servicios domésticos":
          this.product.descripcion = "Asistencia en labores del hogar como limpieza, cocina o cuidado.";
          break;
        case "transporte":
          this.product.descripcion = "Traslado eficiente y seguro hacia su destino.";
          break;
        case "academicos":
          this.product.descripcion = "Apoyo en procesos educativos y formación académica.";
          break;
        default:
          this.product.descripcion = "Servicio especializado disponible bajo solicitud.";
      }
    } else {
      this.product.descripcion = descripcion;
    }
  }

  setImagenUrl(imagen_url: string): void {
    this.product.imagen_url = imagen_url;
  }

  setPrecio(precio: number): void {
    this.product.precio = precio < 10000 ? 10000 : precio;
  }

  setCategoria(categoria: string): void {
    this.product.categoria = categoria;
  }

  getProduct(): ServiceProduct {
    const result = this.product;
    this.reset();
    return result;
  }
}
