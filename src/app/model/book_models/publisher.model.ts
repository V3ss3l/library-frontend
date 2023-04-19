export class Publisher{
  id: number;
  name: string;
  city: string;

  constructor(id?: number, name?: string, city?: string) {
    this.id = id ?? 0;
    this.name = name ?? "";
    this.city = city ?? "";
  }
}
