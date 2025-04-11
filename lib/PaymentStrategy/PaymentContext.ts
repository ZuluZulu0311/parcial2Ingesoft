import { PaymentStrategy } from "./PaymentStrategy";
import { Order } from "../Models/Order";

export class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  public async processPayment(order: Order, amount: number): Promise<boolean> {
    return await this.strategy.pay(order, amount);
  }
}