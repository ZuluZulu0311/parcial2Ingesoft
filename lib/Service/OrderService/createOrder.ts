import { supabase } from "../../supaClient";
import { ConcreteOrderBuilder } from "@/lib/OrderBuilder/OrderBuilder";
import { OrderDirector } from "@/lib/OrderBuilder/OrderDirector";
import { Order } from "@/lib/Models/Order";

export class OrderService {
  private director: OrderDirector;

  constructor() {
    this.director = new OrderDirector();
  }

  async insertOrder(productId: number, precio: number, email: string): Promise<Order | null> {
    const builder = new ConcreteOrderBuilder();
    this.director.setBuilder(builder);
    this.director.buildBasicOrder(productId, precio, email);

    const order = builder.getOrder();

    const { data, error } = await supabase
      .from("ordenes")
      .insert([
        {
          id: Math.floor(Math.random() * 1000000),
          precio: order.precio,
          email_cliente: order.email,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error creando la orden:", error.message);
      return null;
    }

    order.id = data.id;
    return order;
  }
}
