import {Publisher} from "./publisher.model";

export class Book{
  id?: number;
  bookName:string;
  author:string;
  isbn:string;
  bbk:string;
  udk:string;
  pagesCount: number;
  yearOfPublishing: number;
  publisher : Publisher;
  language: string;
  annotation : string;
  additionalInfo : string;

  constructor(bookName?: string, author?: string,
             isbn?: string, BBK?: string, UDK?: string,
              pagesCount?: number, yearOfPublishing?: number,
              publisher?: Publisher, language?: string,
              annotation?: string, additionalInfo?: string) {
    this.bookName = bookName ?? "";
    this.author = author ?? "";
    this.isbn = isbn ?? "";
    this.bbk = BBK ?? "";
    this.udk = UDK ?? "";
    this.pagesCount = pagesCount ?? 0;
    this.yearOfPublishing = yearOfPublishing ?? 0;
    this.publisher = publisher ?? new Publisher();
    this.language = language ?? "";
    this.annotation = annotation ?? "";
    this.additionalInfo = additionalInfo ?? "";
  }
}
