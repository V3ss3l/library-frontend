import {Package} from "./package.model";
import {Book} from "./book.model";
import {Storage} from "./storage.model";

export class StoragesModel {
  id?: number;
  bookPackage: Package;
  book: Book;
  countBooks: number;
  storage: Storage;

  constructor(bookPackage?: Package, book?: Book,
              countBooks?: number, storage?: Storage) {
    this.bookPackage = bookPackage ?? new Package();
    this.book = book ?? new Book();
    this.countBooks = countBooks ?? 0;
    this.storage = storage ?? new Storage();
  }
}
