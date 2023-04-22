import {Adress} from "../adress.model";
import {Group} from "./group.model";
import {Role} from "./role.model";
import {Formuliar} from "./formuliar.model";

export class Reader{
  id?: number;
  lastName: string;
  firstName: string;
  surName: string;
  adress: Adress;
  registrationDate: Date;
  email: string;
  cellular: string;
  course: number;
  group: Group;
  receiptDate: Date;
  expirationDate: Date;
  role: Role;
  formuliar: Formuliar;

  constructor(lastName?: string,
  firstName?: string,
  surName?: string,
  adress?: Adress,
  registrationDate?: Date,
  email?: string,
  cellular?: string,
  course?: number,
  group?: Group,
  receiptDate?: Date,
  expirationDate?: Date,
  role?: Role,
  formuliar?: Formuliar){
    this.lastName = lastName ?? "";
    this.firstName = firstName ?? "";
    this.surName = surName ?? "";
    this.adress = adress ?? new Adress();
    this.registrationDate = registrationDate ?? new Date();
    this.email = email ?? "";
    this.cellular = cellular ?? "";
    this.course = course ?? 0;
    this.group = group ?? new Group();
    this.receiptDate = receiptDate ?? new Date();
    this.expirationDate = expirationDate ?? new Date();
    this.role = role ?? new Role();
    this.formuliar = formuliar ?? new Formuliar();
  }
}
