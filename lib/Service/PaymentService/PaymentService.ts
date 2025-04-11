import { PaymentContext } from "@/lib/PaymentStrategy/PaymentContext";
import { PaymentStrategy } from "@/lib/PaymentStrategy/PaymentStrategy";
import { PayPalPaymentStrategy } from "@/lib/PaymentStrategy/Strategies/PaypalPayment";
import { PSEPaymentStrategy } from "@/lib/PaymentStrategy/Strategies/PSEPaymentStrategy";
import { CreditCardPaymentStrategy } from "@/lib/PaymentStrategy/Strategies/CreditCardPaymentStrategy";
import { Order } from "@/lib/Models/Order";

export class PaymentService {
  private context: PaymentContext;

  constructor(method: string) {
    const strategy = this.resolveStrategy(method);
    this.context = new PaymentContext(strategy);
  }

  private resolveStrategy(method: string): PaymentStrategy {
    switch (method) {
      case 'paypal':
        return new PayPalPaymentStrategy();
      case 'pse':
        return new PSEPaymentStrategy();
      case 'tarjeta':
      default:
        return new CreditCardPaymentStrategy();
    }
  }

  async pagar(order: Order): Promise<boolean> {
    return await this.context.processPayment(order, order.precio);
  }


  /*
  // PaymentVisualStrategy.tsx (solo frontend)
  import { PaymentStrategy } from './PaymentStrategy';
  import React from 'react';
    export interface PaymentVisualStrategy extends PaymentStrategy {
  getComponent(onSubmit: (data: any) => void): React.ReactElement;
}
}*/
}
