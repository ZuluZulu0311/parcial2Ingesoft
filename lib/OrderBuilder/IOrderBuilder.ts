import { Order } from "../Models/Order";

export interface IOrderBuilder {
  reset(): void;
  setProductId(productId: number): void;
  setPrecio(precio: number): void;
  setEmail(email: string): void;
  setFecha(fecha: Date): void;
  getOrder(): Order;
}