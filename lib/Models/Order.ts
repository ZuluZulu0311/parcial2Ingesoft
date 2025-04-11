export class Order {
  constructor(
    public id: number,
    public productId: number,
    public precio: number,
    public email: string,
    public fecha: Date
  ) {}
}
