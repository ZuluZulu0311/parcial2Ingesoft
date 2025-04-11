import { PaymentStrategy } from "../PaymentStrategy";
import { Order } from "@/lib/Models/Order";

export class PayUPaymentStrategy implements PaymentStrategy {
  async pay(order: Order, amount: number): Promise<boolean> {
    this.redirectToGateway(order);
    return Promise.resolve(true);
  }

  private redirectToGateway(order: Order): void {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/';
    form.style.display = 'none';

    const fields: Record<string, string> = {
      merchantId: "508029",
      accountId: "512321",
      description: `Test PAYU`,
      referenceCode: `TestPayU`,
      amount: "20000",
      tax: "0",
      taxReturnBase: "0",
      currency: "COP",
      signature: "7ee7cf808ce6a39b17481c54f2c57acc",
      test: "1",
      buyerEmail: order.email,
      responseUrl: "http://localhost:3000/",
      confirmationUrl: "http://localhost:3000/confirmacion"
    };

    for (const key in fields) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  }
}
