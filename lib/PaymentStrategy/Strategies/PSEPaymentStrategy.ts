import { PaymentStrategy } from "../PaymentStrategy";
import { Order } from "@/lib/Models/Order";
import React from "react";

export class PSEPaymentStrategy implements PaymentStrategy {
  async pay(order: Order, amount: number): Promise<boolean> {
    console.log(`Procesando pago PSE para la orden ${order.id}, monto: ${amount}`);
    return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
  }

}
