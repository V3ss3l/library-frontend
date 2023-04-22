import {Book} from "./book.model";

export class Package{
  id?: number;
  countOfBooks: number;
  book: Book;

  constructor(countOfBooks?: number, book?: Book) {
    this.countOfBooks = countOfBooks ?? 0;
    this.book = book ?? new Book();
  }
}
