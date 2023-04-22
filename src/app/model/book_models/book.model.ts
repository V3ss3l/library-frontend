import {Publisher} from "./publisher.model";

export class Book{
  id?: number;
  bookName:string;
  author:string;
  ISBN:string;
  BBK:string;
  UDK:string;
  pagesCount: number;
  yearOfPublishing: number;
  publisher : Publisher;
  language: string;
  annotation : string;
  additionalInfo : string;

  constructor(bookName?: string, author?: string,
              ISBN?: string, BBK?: string, UDK?: string,
              pagesCount?: number, yearOfPublishing?: number,
              publisher?: Publisher, language?: string,
              annotation?: string, additionalInfo?: string) {
    this.bookName = bookName ?? "";
    this.author = author ?? "";
    this.ISBN = ISBN ?? "";
    this.BBK = BBK ?? "";
    this.UDK = UDK ?? "";
    this.pagesCount = pagesCount ?? 0;
    this.yearOfPublishing = yearOfPublishing ?? 0;
    this.publisher = publisher ?? new Publisher();
    this.language = language ?? "";
    this.annotation = annotation ?? "";
    this.additionalInfo = additionalInfo ?? "";
  }
}
