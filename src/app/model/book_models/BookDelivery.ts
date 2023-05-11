import {Book} from "./book.model";

export class BookDelivery{
  id?: number;
  book: Book;
  dateOfGet: Date;
  dateOfExpire: Date;

  constructor(book?: Book, dateOfGet?: Date, dateOfExpire?: Date) {
    this.book = book ?? new Book();
    this.dateOfGet = dateOfGet ?? new Date();
    this.dateOfExpire = dateOfExpire ?? new Date();
  }
}
