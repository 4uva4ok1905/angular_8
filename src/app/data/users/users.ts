export class Users{

  private pId:number;
  private pName:string;


  constructor(id: number, name: string) {
    this.pId = id;
    this.pName = name;
  }

  get id(): number {
    return this.pId;
  }

  set id(value: number) {
    this.pId = value;
  }

  get name(): string {
    return this.pName;
  }

  set name(value: string) {
    this.pName = value;
  }

  public static formJson(json:any):Users{
    return new Users(json.id, json.name);
  }
}
