export class HallType{
  id?: number;
  typeName: string;

  constructor(typeName?: string){
    this.typeName = typeName ?? "";
  }
}
