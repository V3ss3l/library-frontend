import {Package} from "./package.model";
import {Book} from "./book.model";
import {Storage} from "./storage.model";
import {Hall} from "../hall_models/hall.model";

export class StoragesModel {
  id?: number;
  bookPackage: Package;
  book: Book;
  countBooks: number;
  bookStorage: Storage;
  hall: Hall;

  constructor(bookPackage?: Package, book?: Book,
              countBooks?: number, storage?: Storage, hall?: Hall) {
    this.bookPackage = bookPackage ?? new Package();
    this.book = book ?? new Book();
    this.countBooks = countBooks ?? 0;
    this.bookStorage = storage ?? new Storage();
    this.hall = hall ?? new Hall();
  }
}
