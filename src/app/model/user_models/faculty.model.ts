export class Faculty{
  id: number;
  facultyName: string;

  constructor(id?: number, facultyName?: string){
    this.id = id ?? 0;
    this.facultyName = facultyName ?? "";
  }
}
