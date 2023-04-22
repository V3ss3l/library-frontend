import {Reader} from "./reader.model";

export class Formuliar{
  id?: number;
  dateOfCreation: Date;
  countOverdueBooks: number;
  reader: Reader;

  constructor(dateOfCreation?: Date,
              countOverdueBooks?: number, reader?: Reader) {
    this.dateOfCreation = dateOfCreation ?? new Date();
    this.countOverdueBooks = countOverdueBooks ?? 0;
    this.reader = reader ?? new Reader();
  }
}
