import {Reader} from "./reader.model";

export class Formuliar{
  id: number;
  dateOfCreation: Date;
  countOverdueBooks: number;
  reader: Reader;

  constructor(id?: number, dateOfCreation?: Date,
              countOverdueBooks?: number, reader?: Reader) {
    this.id = id ?? 0;
    this.dateOfCreation = dateOfCreation ?? new Date();
    this.countOverdueBooks = countOverdueBooks ?? 0;
    this.reader = reader ?? new Reader();
  }
}
