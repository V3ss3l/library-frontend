export class LibraryAdmin{
  adminId?: number;
  lastName: string;
  firstName: string;
  surName: string;

  constructor( lastName?: string,
              firstName?: string, surName?: string) {
    this.lastName = lastName ?? "";
    this.firstName = firstName ?? "";
    this.surName = surName ?? "";
  }
}
