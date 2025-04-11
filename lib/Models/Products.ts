export class Product {
  constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    public imagen_url: string,
    public precio: number,
    public categoria: string
  ) {}
}
