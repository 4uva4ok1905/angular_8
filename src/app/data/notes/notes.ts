import {Users} from "../users/users";

export class Notes{

  private pId:number;
  private pName:string;
  private pDone:boolean;
  private pDesc:string;

  constructor(id: number, name: string, done: boolean, desc: string) {
    this.pId = id;
    this.pName = name;
    this.pDone = done;
    this.pDesc = desc;
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

  get done(): boolean {
    return this.pDone;
  }

  set done(value: boolean) {
    this.pDone = value;
  }

  get desc(): string {
    return this.pDesc;
  }

  set desc(value: string) {
    this.pDesc = value;
  }

  public static formJson(json:any):Notes{
    return new Notes(json.id, json.name, json.done, json.desc);
  }
}
