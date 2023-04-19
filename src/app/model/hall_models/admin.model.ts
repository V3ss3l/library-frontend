export class LibraryAdmin{
  adminId: number;
  lastName: string;
  firstName: string;
  surName: string;

  constructor(adminId?: number, lastName?: string,
              firstName?: string, surName?: string) {
    this.adminId = adminId ?? 0;
    this.lastName = lastName ?? "";
    this.firstName = firstName ?? "";
    this.surName = surName ?? "";
  }
}
