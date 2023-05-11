import {Book} from "./book.model";
import {Formuliar} from "../user_models/formuliar.model";

export class BookDelivery{
  id?: number;
  formuliar: Formuliar;
  book: Book;
  dateOfGet: Date;
  dateOfExpire: Date;

  constructor(formuliar?: Formuliar, book?: Book, dateOfGet?: Date, dateOfExpire?: Date) {
    this.formuliar = formuliar ?? new Formuliar();
    this.book = book ?? new Book();
    this.dateOfGet = dateOfGet ?? new Date();
    this.dateOfExpire = dateOfExpire ?? new Date();
  }
}
