export class HallType{
  id: number;
  typeName: string;

  constructor(id?: number, typeName?: string){
    this.id = id ?? 0;
    this.typeName = typeName ?? "";
  }
}
