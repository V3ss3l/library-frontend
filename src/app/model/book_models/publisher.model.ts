export class Publisher{
  id?: number;
  name: string;
  city: string;

    constructor(name?: string, city?: string) {
    this.name = name ?? "";
    this.city = city ?? "";
  }
}
