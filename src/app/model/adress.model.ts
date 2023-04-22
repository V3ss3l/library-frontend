export class Adress {
  id?: number;
  street: string;
  building: string;
  room: string;
  floor: string;

  constructor(street?: string, building?: string, room?: string, floor?: string) {
    this.street = street ?? "";
    this.building = building ?? "";
    this.room = room ?? "";
    this.floor = floor ?? "";
  }
}
