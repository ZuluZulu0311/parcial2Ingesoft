import { IProductBuilder } from "./IProductBuilder";

export class ProductDirector {
  private builder!: IProductBuilder;

  setBuilder(builder: IProductBuilder): void {
    this.builder = builder;
  }

  buildFullPhysicalProduct(
    nombre: string,
    descripcion: string,
    imagen_url: string,
    precio: number,
    categoria: string
  ): void {
    this.builder.reset();
    this.builder.setNombre(nombre);
    this.builder.setDescripcion(descripcion);
    this.builder.setImagenUrl(imagen_url);
    this.builder.setPrecio(precio);
    this.builder.setCategoria(categoria);
  }
  
  buildServiceProduct(
    nombre: string,
    descripcion: string,
    imagen_url: string,
    precio: number,
    categoria: string
  ): void {
    this.builder.reset();
    this.builder.setNombre(nombre);
    this.builder.setDescripcion(descripcion);
    this.builder.setImagenUrl(imagen_url);
    this.builder.setPrecio(precio);
    this.builder.setCategoria(categoria);
  }
}
