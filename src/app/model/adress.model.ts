export class Adress {
  id: number;
  street: string;
  building: string;
  room: string;
  floor: string;

  constructor(id?: number, street?: string, building?: string, room?: string, floor?: string) {
    this.id = id ?? 0;
    this.street = street ?? "";
    this.building = building ?? "";
    this.room = room ?? "";
    this.floor = floor ?? "";
  }
}
