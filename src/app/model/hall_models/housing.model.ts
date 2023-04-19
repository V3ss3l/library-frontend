import {Adress} from "../adress.model";

export class Housing{
  id: number;
  housingName: string;
  adress: Adress;

  constructor(id?: number, housingName?: string, adress?: Adress) {
    this.id = id ?? 0;
    this.housingName = housingName ?? "";
    this.adress = adress ?? new Adress();
  }
}
