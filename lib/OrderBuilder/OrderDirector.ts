import { IOrderBuilder } from "./IOrderBuilder";

export class OrderDirector {
  private builder!: IOrderBuilder;

  public setBuilder(builder: IOrderBuilder): void {
    this.builder = builder;
  }

  public buildBasicOrder(productId: number, precio: number, email: string): void {
    this.builder.setProductId(productId);
    this.builder.setPrecio(precio);
    this.builder.setEmail(email);
    this.builder.setFecha(new Date());
  }

}
