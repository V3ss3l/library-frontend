export class Storage{
  id?: number;
  name: string;
  abbreviation: string;

  constructor(name?: string, abbreviation?: string) {
    this.name = name ?? "";
    this.abbreviation = abbreviation ?? "";
  }
}
