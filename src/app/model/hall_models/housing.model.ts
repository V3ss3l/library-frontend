import {Adress} from "../adress.model";

export class Housing{
  id?: number;
  housingName: string;
  adress: Adress;

  constructor(housingName?: string, adress?: Adress) {
    this.housingName = housingName ?? "";
    this.adress = adress ?? new Adress();
  }
}
