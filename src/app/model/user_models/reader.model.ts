import {Adress} from "../adress.model";
import {Group} from "./group.model";
import {Role} from "./role.model";
import {Formuliar} from "./formuliar.model";

export class Reader{
  id?: number;
  lastName: string;
  firstName: string;
  surName: string;
  adress: Adress | null;
  registrationDate: Date;
  email: string;
  cellular: string;
  password: string;
  course: number;
  group: Group | null;
  receiptDate: Date | null;
  expirationDate: Date | null;
  role: Role;

  constructor(lastName?: string,
  firstName?: string,
  surName?: string,
  adress?: Adress,
  registrationDate?: Date,
  email?: string,
  cellular?: string,
  password?: string,
  course?: number,
  group?: Group,
  receiptDate?: Date,
  expirationDate?: Date,
  role?: Role){
    this.lastName = lastName ?? "";
    this.firstName = firstName ?? "";
    this.surName = surName ?? "";
    this.adress = adress ?? null;
    this.registrationDate = registrationDate ?? new Date();
    this.email = email ?? "";
    this.cellular = cellular ?? "";
    this.password = password ?? "";
    this.course = course ?? 0;
    this.group = group ?? null;
    this.receiptDate = receiptDate ?? null;
    this.expirationDate = expirationDate ?? null;
    this.role = role ?? new Role();
  }
}
