export class BookDelivery{
  id?: number;
  bookItemId: number;
  dateOfGet: Date;
  dateOfExpire: Date;

  constructor(bookItemId?: number, dateOfGet?: Date, dateOfExpire?: Date) {
    this.bookItemId = bookItemId ?? 0;
    this.dateOfGet = dateOfGet ?? new Date();
    this.dateOfExpire = dateOfExpire ?? new Date();
  }
}
