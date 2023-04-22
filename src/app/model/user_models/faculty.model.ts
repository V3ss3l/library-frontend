export class Faculty{
  id?: number;
  facultyName: string;

  constructor(facultyName?: string){

    this.facultyName = facultyName ?? "";
  }
}
