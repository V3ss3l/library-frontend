export class Group{
  id?: number;
  name: string;
  startYear: number;

  constructor(name?: string,
  startYear?: number,) {
    this.name = name ?? "";
    this.startYear = startYear ?? 0;
  }
}
