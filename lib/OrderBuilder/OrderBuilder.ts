import { IOrderBuilder } from "./IOrderBuilder";
import { Order } from "../Models/Order";

export class ConcreteOrderBuilder implements IOrderBuilder {
  private order!: Order;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.order = new Order(0, 0, 0, "", new Date());
  }

  public setProductId(productId: number): void {
    this.order.productId = productId;
  }

  public setPrecio(precio: number): void {
    this.order.precio = precio;
  }

  public setEmail(email: string): void {
    this.order.email = email;
  }

  public setFecha(fecha: Date): void {
    this.order.fecha = fecha;
  }

  public getOrder(): Order {
    const result = this.order;
    this.reset();
    return result;
  }
}
