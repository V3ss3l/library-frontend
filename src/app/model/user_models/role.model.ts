import {Job} from "./job.model";
import {Faculty} from "./faculty.model";

export class Role{
  id?: number;
  roleName: string;
  readerJob: Job;
  faculty: Faculty;
  department: string;

  constructor(roleName?: string,
  readerJob?: Job,
  faculty?: Faculty,
  department?: string) {
    this.roleName = roleName ?? "";
    this.readerJob = readerJob ?? new Job();
    this.faculty = faculty ?? new Faculty();
    this.department = department ?? "";
  }
}
