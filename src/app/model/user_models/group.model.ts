export class Group{
  id: number;
  name: string;
  startYear: number;

  constructor(id?: number,
  name?: string,
  startYear?: number,) {
    this.id = id ?? 0;
    this.name = name ?? "";
    this.startYear = startYear ?? 0;
  }
}
