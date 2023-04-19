import {Housing} from "./housing.model";
import {HallType} from "./halltype.model";
import {LibraryAdmin} from "./admin.model";

export class Hall{
  id: number;
  hallName: string;
  housing: Housing;
  hallType: HallType;
  admin: LibraryAdmin;

  constructor(id?: number, hallName?: string,
              housing?: Housing, hallType?: HallType, admin?: LibraryAdmin) {
    this.id = id ?? 0;
    this.hallName = hallName ?? "";
    this.housing = housing ?? new Housing();
    this.hallType = hallType ?? new HallType();
    this.admin = admin ?? new LibraryAdmin();
  }
}
